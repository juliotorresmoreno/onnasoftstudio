import { TaskModel } from "../TaskModel";

export interface AnswererResult {
  answer: string;
  score: number;
}

export class QuestionAnsweringModelBase extends TaskModel {
  public readonly task: string = "question-answering";
  public readonly description: string = "Answer a question based on a context";

  answerer(question: string, context: string): Promise<AnswererResult> {
    throw new Error("Not implemented");
  }
}
