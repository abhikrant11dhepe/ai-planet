import { Pinecone } from "@pinecone-database/pinecone";

export async function getMatchesFromEmbeddings(
    embeddings: number[],
    fileKey: string
  ) {
    try {
      const client = new Pinecone({
        //environment: process.env.PINECONE_ENVIRONMENT!,
        apiKey: process.env.PINECONE_API_KEY!,
      });
      const pineconeIndex = await client.index("chatpdf");
      const queryResponse = await pineconeIndex.query({
        vector: embeddings,
        filter: { fileKey: { $eq: fileKey } },
        topK: 5,
        includeMetadata: true,
      });
  
      return queryResponse.matches || [];
    } catch (error) {
      console.log("error querying embeddings", error);
      throw error;
    }
  }
  
  
  