import { Suspense } from "react";
import Index from "./Index";
import { Loading } from "@/components/Loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Index />
    </Suspense>
  );
}
