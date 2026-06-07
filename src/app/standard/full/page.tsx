import type { Metadata } from "next";
import FullSpec from "@content/standard/awgs-1-0-foundation.mdx";

export const metadata: Metadata = {
  title: "AWGS 1.0 Foundation Specification"
};

export default function FullSpecPage() {
  return (
    <article className="prose-awgs max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <FullSpec />
    </article>
  );
}
