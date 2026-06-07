import { SidebarNav } from "@/components/layout/SidebarNav";
import { InitiativeNotice } from "@/components/content/InitiativeNotice";

export default function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <SidebarNav />
      <div className="min-w-0 flex-1">
        <div className="mb-8">
          <InitiativeNotice />
        </div>
        {children}
      </div>
    </div>
  );
}
