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
        eyebrow="Static Retrieval"
        title="Initiative Chat Assistant"
        description="A GitHub Pages-compatible assistant that retrieves cited answers from the current Agentic Accessibility and AWGS site corpus. It does not use vector search or a model backend yet."
      />
      <ChatPanel />
    </div>
  );
}
