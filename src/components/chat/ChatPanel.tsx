"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { answerFromAwgs } from "@/lib/awgs";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ask a question about Agentic Accessibility, AWGS, governance domains, compliance levels, glossary terms, or future work. This placeholder returns mock answers from the current public content."
    }
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed })
      });
      if (!response.ok) {
        throw new Error("Mock API route unavailable");
      }
      const data = (await response.json()) as { answer?: string };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer ?? "The placeholder assistant could not generate a mock answer."
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: answerFromAwgs(trimmed)
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm" aria-labelledby="rag-assistant-title">
      <div className="border-b border-slate-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="teal">Mock RAG</Badge>
            <h2 id="rag-assistant-title" className="mt-3 text-2xl font-semibold tracking-normal text-ink">
              Initiative assistant
            </h2>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Placeholder API</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          This UI is prepared for future retrieval over Agentic Accessibility vision documents, AWGS standard documents,
          knowledge base articles, glossary terms, research notes, and future requirements. It remains mocked for now; the
          current API route returns deterministic mock responses.
        </p>
      </div>

      <div className="max-h-[420px] space-y-4 overflow-y-auto p-5">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={message.role === "assistant" ? "mr-6 rounded-lg bg-slate-50 p-4" : "ml-6 rounded-lg bg-blue-50 p-4"}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {message.role === "assistant" ? "Assistant" : "You"}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="border-t border-slate-200 p-4">
        <div className="flex gap-2">
          <label className="flex-1">
            <span className="sr-only">Ask about AWGS</span>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm text-ink placeholder:text-slate-400 focus:border-standard-blue"
              placeholder="What is Agentic Accessibility?"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-ink text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Send question"
            title="Send"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </form>
    </section>
  );
}
