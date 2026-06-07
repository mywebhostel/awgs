import ChangeLog from "@content/public/changelog.mdx";

export default function ChangeLogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="prose-awgs max-w-none rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <ChangeLog />
      </article>
    </div>
  );
}
