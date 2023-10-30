"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import config from "@/config";
import Playground from "@/components/playground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact: " + config.TITLE,
  description: `Unleash your creativity and experiment with cutting-edge technology in our Playground, where you can tinker with frontend, backend, cloud, and AI tools.`,
};

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
