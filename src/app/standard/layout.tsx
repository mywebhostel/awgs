import { SidebarNav } from "@/components/layout/SidebarNav";
import { InitiativeNotice } from "@/components/content/InitiativeNotice";
import Link from "next/link";

export default function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <SidebarNav />
      <div className="min-w-0 flex-1">
        <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
          This is a compatibility route for older AWGS links. The canonical AWGS 1.0 route is{" "}
          <Link href="/standards/awgs" className="font-semibold text-standard-blue hover:text-blue-700">
            /standards/awgs
          </Link>
          .
        </div>
        <div className="mb-8">
          <InitiativeNotice />
        </div>
        {children}
      </div>
    </div>
  );
}
