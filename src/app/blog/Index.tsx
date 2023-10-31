import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogHeader } from "./Header";
import { Article } from "./Article";

interface IndexProps {
  articles: any[];
}

export function Index({ articles }: IndexProps) {
  return (
    <>
      <Header />

      <main>
        <section className="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">
          <BlogHeader />

          <ul>
            {articles.map((article) => (
              <Article {...article} key={article.title} />
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
