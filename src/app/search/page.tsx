import { SearchInput } from "@/components/search/SearchInput";
import { SectionHeader } from "@/components/content/SectionHeader";

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Search"
          title="Search AWGS"
          description="Find standard sections, principles, governance domains, compliance levels, conformance guidance, glossary terms, and future knowledge base material."
        />
        <SearchInput />
      </div>
    </div>
  );
}
