import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQS } from "@/components/FAQS";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insides } from "@/components/Insides";
import { Recommends } from "@/components/Recommends";
import config from "@/config";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>
          {config.NAME}: {config.TITLE}
        </title>
        <meta
          content={`Welcome to this website where you'll delve into the captivating realm of technology and artificial intelligence (AI) through the eyes of ${config.NAME}. I am a passionate software developer with a forward-thinking approach and a deep understanding of artificial intelligence. He's a visionary in the technology world, on a mission to drive intelligent solutions for today's most pressing challenges.`}
          name="description"
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Insides />
        <Recommends />
        <FAQS />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
