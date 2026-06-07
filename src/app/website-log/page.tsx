import type { Metadata } from "next";
import WebsiteLog from "@content/public/website-log.mdx";

export const metadata: Metadata = {
  title: "Website Log"
};

export default function WebsiteLogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="prose-awgs max-w-none rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <WebsiteLog />
      </article>
    </div>
  );
}
