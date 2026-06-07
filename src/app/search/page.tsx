import { SearchInput } from "@/components/search/SearchInput";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Search"
          title="Search the Initiative"
          description="Find Agentic Accessibility vision material, AWGS sections, governance domains, compliance levels, glossary terms, future work, and knowledge base material."
        />
        <SearchInput />
      </div>
    </div>
  );
}
