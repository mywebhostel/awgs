import { NextResponse } from "next/server";
import { answerFromAwgs } from "@/lib/awgs";

// Future RAG pipeline: Markdown/MDX content -> chunking -> embeddings -> vector store -> retrieval -> cited answers.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { question?: string };
  const question = typeof body.question === "string" ? body.question : "";

  return NextResponse.json({
    answer: answerFromAwgs(question),
    sources: [
      {
        title: "Agentic Accessibility Vision",
        href: "/vision/agentic-accessibility"
      },
      {
        title: "AWGS 1.0 Foundation Specification",
        href: "/standards/awgs/full"
      }
    ],
    mode: "mock"
  });
}
