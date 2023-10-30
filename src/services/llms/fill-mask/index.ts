export function MakeModelFillMask(prefered?: string) {
  const { FillMaskModelBase } = require("./FillMaskModelBase");
  const { DistilBertForMaskedModel } = require("./DistilBertForMaskedModel");
  const { env } = require("@xenova/transformers");

  // @ts-ignore
  env.allowLocalModels = false;

  // @ts-ignore
  let model: FillMaskModelBase;

  // if (prefered === "distilbert")
  model = new DistilBertForMaskedModel();

  return model;
}
