import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import buildingSrc from "../../assets/building-3.png";

export default function Page() {
  return (
    <>
      <Head>
        <title>Blog: Pioneering the Future of Technology and AI</title>
        <meta content="Explore our blog to discover the latest insights and innovations in technology and AI, shaping the future of our digital world." name="description" />
      </Head>

      <Header />

      <main>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <Image alt="Building" src={buildingSrc} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
