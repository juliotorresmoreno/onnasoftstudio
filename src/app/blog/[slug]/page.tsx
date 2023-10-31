import prisma from "@/lib/prisma";
import { Index } from "./Index";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const article = await prisma.post.findFirst({
    where: {
      shortUrl: slug,
    },
  });

  return <Index {...article} />;
}
