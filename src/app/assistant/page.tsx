import { ChatPanel } from "@/components/chat/ChatPanel";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function AssistantPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <SectionHeader
        eyebrow="RAG Placeholder"
        title="Initiative Chat Assistant"
        description="A prepared chat interface for future retrieval over Agentic Accessibility and AWGS content. The current endpoint returns mock answers based on current public content."
      />
      <ChatPanel />
    </div>
  );
}
