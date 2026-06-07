import { NextResponse } from "next/server";
import { answerFromAwgs } from "@/lib/awgs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { question?: string };
  const question = typeof body.question === "string" ? body.question : "";

  return NextResponse.json({
    answer: answerFromAwgs(question),
    sources: [
      {
        title: "AWGS 1.0 Foundation Specification",
        href: "/standard/full"
      }
    ],
    mode: "mock"
  });
}
