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
        <title>Playground: Pioneering the Future of Technology and AI</title>
        <meta
          content="Unleash your creativity and experiment with cutting-edge technology in our Playground, where you can tinker with frontend, backend, cloud, and AI tools."
          name="description"
        />
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
