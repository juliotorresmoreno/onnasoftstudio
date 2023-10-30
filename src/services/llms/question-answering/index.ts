export function MakeModelQuestionAnswering(prefered?: string) {
  const {
    DistilbertBaseUncasedDistilledSquad,
  } = require("./DistilbertBaseUncasedDistilledSquad");
  const {
    QuestionAnsweringModelBase,
  } = require("./QuestionAnsweringModelBase");
  const { env } = require("@xenova/transformers");
  // @ts-ignore
  env.allowLocalModels = false;

  // @ts-ignore
  let model: QuestionAnsweringModelBase = null;

  // if (prefered === "distilbert")
  model = new DistilbertBaseUncasedDistilledSquad();

  return model;
}
