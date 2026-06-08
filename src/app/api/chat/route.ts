import { NextResponse } from "next/server";
import { answerFromAwgs } from "@/lib/rag";

// Shared static retrieval is used by the client and this local/server route.
// Future pipeline: Markdown/MDX content -> chunking -> embeddings -> vector store -> retrieval -> cited answers.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { question?: string };
  const question = typeof body.question === "string" ? body.question : "";

  return NextResponse.json(answerFromAwgs(question));
}
