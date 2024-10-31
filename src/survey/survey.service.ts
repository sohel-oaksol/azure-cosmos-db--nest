// src/survey/survey.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { getContainer } from '../config/cosmos.config';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  private async getContainer() {
    return await getContainer();
  }

  async create(createSurveyDto: CreateSurveyDto): Promise<Survey> {
    const container = await this.getContainer();
    const { resource: createdItem } = await container.items.create(createSurveyDto);
    return createdItem;
  }

  async findAll(): Promise<Survey[]> {
    const container = await this.getContainer();
    const { resources: items } = await container.items.query("SELECT * from c").fetchAll();
    return items;
  }

  async findOne(id: string): Promise<Survey> {
    const container = await this.getContainer();
    const { resource } = await container.item(id).read();
    if (!resource) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }
    return resource;
  }

  async update(id: string, updateSurveyDto: UpdateSurveyDto): Promise<Survey> {
    const container = await this.getContainer();

    // Retrieve the existing item to ensure required fields like templateId are included
    const { resource: existingItem } = await container.item(id).read();
    if (!existingItem) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }

    // Merge existing item with updated fields
    const updatedItem = { ...existingItem, ...updateSurveyDto };

    // Replace the item with the merged data
    const { resource: updatedResource } = await container.item(id).replace(updatedItem);
    return updatedResource;
  }

  async remove(id: string): Promise<void> {
    const container = await this.getContainer();
    await container.item(id).delete();
  }
}
