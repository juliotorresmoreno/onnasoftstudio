"use client";

import {
  ChromaClient,
  Collection,
  TransformersEmbeddingFunction,
} from "chromadb";
import { useEffect, useMemo, useState } from "react";

export interface ModelProps {}

export function Model() {
  let client = useMemo(() => new ChromaClient(), []);
  let embedder = useMemo(() => new TransformersEmbeddingFunction(), []);
  let [collection, setCollection] = useState<Collection | null>(null);
  const collection_name = "test";

  useEffect(() => {
    let embedder = new TransformersEmbeddingFunction();
    client
      .createCollection({
        name: collection_name,
        embeddingFunction: embedder,
      })
      .then(async (collection) => {
        setCollection(collection);
        await collection.add({
          ids: ["id1", "id2"],
          metadatas: [{ source: "my_source" }, { source: "my_source" }],
          documents: ["This is a document", "This is another document"],
        });
        const results = await collection.query({
          nResults: 2,
          queryTexts: ["This is a query document"],
        });
      });
  }, [client]);
  return <></>;
}
