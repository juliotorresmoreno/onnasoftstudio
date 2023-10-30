import { Pipeline, pipeline } from "@xenova/transformers";
import {
  AnswererResult,
  QuestionAnsweringModelBase,
} from "./QuestionAnsweringModelBase";

export class DistilbertBaseUncasedDistilledSquad extends QuestionAnsweringModelBase {
  public readonly id = "Xenova/distilbert-base-uncased-distilled-squad";
  public readonly name: string = "distilbert-base-uncased-distilled-squad";
  public readonly reference: string =
    "https://huggingface.co/Xenova/distilbert-base-uncased-distilled-squad";
  public readonly provider: string = "huggingface";
  private pipeline: Pipeline | null = null;

  loadModel() {
    return pipeline(this.task, this.id).then((model) => {
      this.pipeline = model;
    });
  }

  answerer(question: string, context: string): Promise<AnswererResult> {
    if (!this.pipeline) {
      throw new Error("Model not loaded");
    }

    return this.pipeline(question, context);
  }
}
