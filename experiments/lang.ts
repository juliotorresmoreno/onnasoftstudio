import { ChromaClient, TransformersEmbeddingFunction } from "chromadb";

(async function () {
  const client = new ChromaClient();
  const embedder = new TransformersEmbeddingFunction();

  const collection_name = "test";

  const collection = await client.createCollection({
    name: collection_name,
    embeddingFunction: embedder,
  });

  await collection.add({
    ids: ["id1", "id2"],
    metadatas: [{ source: "my_source" }, { source: "my_source" }],
    documents: ["This is a document", "This is another document"],
  });
  const results = await collection.query({
    nResults: 2,
    queryTexts: ["This is a query document"],
  });
})();
