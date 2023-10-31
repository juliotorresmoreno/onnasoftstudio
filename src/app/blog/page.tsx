import { Suspense } from "react";
import { Index } from "./Index";
import prisma from "@/lib/prisma";
import { Loading } from "@/components/Loading";

export default async function Page() {
  const articles = await prisma.post.findMany({
    where: {
      published: true,
      deleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: 0,
    take: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <Index articles={articles} />
    </Suspense>
  );
}
