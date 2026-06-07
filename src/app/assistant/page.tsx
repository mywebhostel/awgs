import { ChatPanel } from "@/components/chat/ChatPanel";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function AssistantPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <SectionHeader
        eyebrow="RAG Placeholder"
        title="AWGS Chat Assistant"
        description="A prepared chat interface for future retrieval over the AWGS corpus. The current endpoint returns mock answers based on the foundation specification."
      />
      <ChatPanel />
    </div>
  );
}
