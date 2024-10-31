// src/survey/entities/survey.entity.ts
export class Dependency {
    questionId: string;
    triggerAnswer: string[];
  }
  
  export class Question {
    questionId: string;
    text: string;
    type: 'multiple_choice' | 'text' | 'yes_no';
    options?: string[];
    dependency?: Dependency | null;
  }
  
  export class Survey {
    templateId: string;
    templateName: string;
    description: string;
    questions: Question[];
    id: string;
  }
  