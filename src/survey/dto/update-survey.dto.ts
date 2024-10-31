// src/survey/dto/update-survey.dto.ts
import { Question } from '../entities/survey.entity';

export class UpdateSurveyDto {
  templateName?: string;
  description?: string;
  questions?: Question[];
}
