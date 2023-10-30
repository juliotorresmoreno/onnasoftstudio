import { Pipeline, pipeline } from "@xenova/transformers";
import { FillMaskModelBase, UnmaskerResult } from "./FillMaskModelBase";

export class DistilBertForMaskedModel extends FillMaskModelBase {
  public readonly id = "Xenova/bert-base-cased";
  public readonly name: string = "bert-base-cased";
  public readonly reference: string =
    "https://huggingface.co/Xenova/bert-base-cased";
  public readonly provider: string = "huggingface";

  private pipeline: Pipeline | null = null;

  loadModel() {
    return pipeline(this.task, this.id).then((model) => {
      this.pipeline = model;
    });
  }

  unmasker(prompt: string): Promise<Array<UnmaskerResult>> {
    if (!this.pipeline) {
      throw new Error("Model not loaded");
    }

    return this.pipeline(prompt, { topk: 1 });
  }
}
