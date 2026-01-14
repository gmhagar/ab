
export type CoverageCategory = 'mandatory' | 'optional';

export interface CoverageDetail {
  id: string;
  title: string;
  summary: string;
  mandatory: string;
  increased: string;
  group: string;
  icon: string;
  tip?: string;
}

// Added TimelineStep interface for Timeline component
export interface TimelineStep {
  title: string;
  date: string;
  description: string;
  status?: 'completed' | 'current';
}

// Added QuizQuestion interface for Quiz component
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

// Added Scenario interface for Scenarios component
export interface Scenario {
  id: string;
  title: string;
  customerProfile: string;
  icon: string;
  options: string[];
  correctCoverages: string[];
  explanation: string;
  explanationOption: string;
  recommendationOption: string;
}
