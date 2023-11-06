import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/FAQS";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insides } from "@/components/Insides";
import { Recommends } from "@/components/Recommends";
import config from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.NAME}: ${config.TITLE}`,
  description: `Welcome to this website where you'll delve into the captivating realm of technology and artificial intelligence (AI) through the eyes of ${config.NAME}. I am a passionate software developer with a forward-thinking approach and a deep understanding of artificial intelligence. He's a visionary in the technology world, on a mission to drive intelligent solutions for today's most pressing challenges.`,
};

export default function Page() {
  if (process.env.DATABASE_URL === "") return null;

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Insides />
        <Recommends />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
