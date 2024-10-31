// src/app.module.ts
import { Module } from '@nestjs/common';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';


@Module({
  imports: [],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class AppModule {}
