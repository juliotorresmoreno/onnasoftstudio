import { TaskModel } from "../TaskModel";

export class TextGenerationModelBase extends TaskModel {
  async loadModel() {
    throw new Error("Not implemented");
  }

  constructor(
    protected readonly temperature: number,
    protected readonly topP: number,
    protected readonly maxTokens: number
  ) {
    super();
  }
}
