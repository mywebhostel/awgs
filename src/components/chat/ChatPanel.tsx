"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Badge } from "@/components/content/Badge";
import { answerFromAwgs, type RagSource } from "@/lib/rag";

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: RagSource[];
};

const suggestedQuestions = [
  {
    label: "Compliance levels",
    question: "What are the AWGS compliance levels?"
  },
  {
    label: "Governance domains",
    question: "What governance domains does AWGS define?"
  },
  {
    label: "Conformance",
    question: "How should AWGS 1.0 conformance be described?"
  }
];

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ask a question about Agentic Accessibility, AWGS, governance domains, compliance levels, glossary terms, or future work. This assistant retrieves cited answers from the current public site corpus."
    }
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    await submitQuestion(trimmed);
  }

  async function submitQuestion(trimmed: string) {
    if (!trimmed || loading) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setQuestion("");
    setLoading(true);

    await Promise.resolve();
    const result = answerFromAwgs(trimmed);
    setMessages((current) => [
      ...current,
      {
        role: "assistant",
        content: result.answer,
        sources: result.sources
      }
    ]);
    setLoading(false);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm" aria-labelledby="rag-assistant-title">
      <div className="border-b border-slate-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="teal">Static Retrieval</Badge>
            <h2 id="rag-assistant-title" className="mt-3 text-2xl font-semibold tracking-normal text-ink">
              Initiative assistant
            </h2>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Cited answers</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          This assistant uses static retrieval over the current Agentic Accessibility and AWGS site corpus. It does not
          perform vector search, model-backed generation, certification assessment, or legal analysis.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Suggested questions">
          {suggestedQuestions.map((item) => (
            <button
              key={item.question}
              type="button"
              disabled={loading}
              onClick={() => submitQuestion(item.question)}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {item.label}
            </button>
          ))}
        </div>
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
            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">{message.content}</p>
            {message.sources?.length ? (
              <div className="mt-4 border-t border-slate-200 pt-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Sources</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {message.sources.map((source) => (
                    <Link
                      key={source.sourceId}
                      href={source.href}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-standard-blue hover:border-blue-200 hover:bg-blue-50"
                    >
                      {source.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
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
              placeholder="Ask about conformance, domains, glossary, or future work"
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
