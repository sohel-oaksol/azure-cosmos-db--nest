// src/survey/dto/create-survey.dto.ts
import { Question } from '../entities/survey.entity';

export class CreateSurveyDto {
  templateId: string;
  templateName: string;
  description: string;
  questions: Question[];
}
