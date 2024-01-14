import { Suspense } from "react";
import Index from "./Index";
import { Loading } from "@/components/Loading";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Index />
      </Suspense>
      
      <Footer />
    </>
  );
}
