"use client";

import { MakeModelFillMask } from "@/services/llms/fill-mask";
import { useEffect, useMemo, useState } from "react";

export function FillMask() {
  const model = useMemo(() => MakeModelFillMask(), []);
  const [text, setText] = useState("");
  useEffect(() => {
    model.loadModel().then(() => {
      model.unmasker("The Milky Way is a [MASK] galaxy.").then((res: any) => {
        setText(res[0].sequence);
      });
    });
  });
  return <>{text}</>;
}
