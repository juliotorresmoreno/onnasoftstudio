/*
import dynamic from "next/dynamic";

const FillMask = dynamic(
  () =>
    import("@/components/playground/FillMask").then(({ FillMask }) => FillMask),
  { ssr: false }
);
*/

export default function Playground() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
  );
}
