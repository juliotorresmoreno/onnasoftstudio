import config from "@/config";
import { OpenAIModel } from "./OpenAIModel";
import { env } from "@xenova/transformers";

export function MakeModelTextGeneration(prefered?: string) {
  // @ts-ignore
  env.allowLocalModels = false;

  if (prefered === "openai") {
    return new OpenAIModel(
      config.LLM_TEMPERATURE,
      config.LLM_TOP_P,
      config.LLM_MAX_TOKENS
    );
  }
  return new OpenAIModel(
    config.LLM_TEMPERATURE,
    config.LLM_TOP_P,
    config.LLM_MAX_TOKENS
  );
}
