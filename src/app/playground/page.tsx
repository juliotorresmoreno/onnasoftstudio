"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Playground from "@/components/playground";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Playground />
      </main>
      <Footer />
    </>
  );
}
