import dynamic from "next/dynamic";
import type { ModelProps } from "./Model";

const Model = dynamic<ModelProps>(
  () => import("./Model").then(({ Model }) => Model),
  {
    ssr: false,
  }
);

export default function Page() {
  if (process.version) return <></>;

  return <Model />;
}
