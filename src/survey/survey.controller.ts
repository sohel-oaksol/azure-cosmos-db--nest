// src/survey/survey.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Controller('surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() createSurveyDto: CreateSurveyDto): Promise<Survey> {
    return this.surveyService.create(createSurveyDto);
  }

  @Get()
  async findAll(): Promise<Survey[]> {
    return this.surveyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Survey> {
    return this.surveyService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto): Promise<Survey> {
    return this.surveyService.update(id, updateSurveyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.surveyService.remove(id);
  }
}
