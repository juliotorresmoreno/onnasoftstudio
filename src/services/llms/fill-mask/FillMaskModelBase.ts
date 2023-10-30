import { TaskModel } from "../TaskModel";

export interface UnmaskerResult {
  score: number;
  sequence: string;
  token: number;
  token_str: string;
}

export class FillMaskModelBase extends TaskModel {
  public readonly task: string = "fill-mask";
  public description: string =
    "Fill Mask is a task that given a sentence with an empty word, it will try to predict the word that should be there.";

  async unmasker(prompt: string): Promise<Array<UnmaskerResult>> {
    throw new Error("Not implemented");
  }
}
