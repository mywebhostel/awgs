import type { Metadata } from "next";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { SectionHeader } from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "Initiative Chat Assistant"
};

export default function AssistantPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <SectionHeader
        eyebrow="RAG Placeholder"
        title="Initiative Chat Assistant"
        description="A prepared chat interface for future retrieval over Agentic Accessibility vision documents, AWGS standard documents, knowledge base articles, glossary terms, research notes, and future requirements. It remains mocked for now; the current endpoint returns mock answers based on current public content."
      />
      <ChatPanel />
    </div>
  );
}
