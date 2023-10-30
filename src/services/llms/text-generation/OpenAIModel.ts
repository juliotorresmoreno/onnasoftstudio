import config from "@/config";
import { OpenAI } from "langchain/llms/openai";
import { TextGenerationModelBase } from "./TextGenerationModelBase";

export class OpenAIModel extends TextGenerationModelBase {
  public readonly id = "";
  public readonly description = "";
  public readonly name = "";
  public readonly path = "";

  private llm: OpenAI | null = null;

  async loadModel() {
    this.llm = new OpenAI({
      openAIApiKey: config.OPENAI_API_KEY,
      temperature: this.temperature,
      topP: this.topP,
      maxTokens: this.maxTokens,
    });
  }

  isFree(): boolean {
    return false;
  }
}
