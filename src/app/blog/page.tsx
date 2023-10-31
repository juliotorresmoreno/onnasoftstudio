import { Index } from "./Index";
import prisma from "@/lib/prisma";

export default async function Page() {
  const articles = await prisma.post.findMany({
    where: {
      published: true,
      deleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  return <Index articles={articles} />;
}
