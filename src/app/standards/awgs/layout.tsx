import { InitiativeNotice } from "@/components/content/InitiativeNotice";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { awgsNavItems } from "@/lib/navigation";

export default function AwgsStandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <SidebarNav title="AWGS 1.0" items={awgsNavItems} />
      <div className="min-w-0 flex-1">
        <Breadcrumbs
          items={[
            { label: "Standards", href: "/standards" },
            { label: "AWGS 1.0" }
          ]}
        />
        <div className="mb-8">
          <InitiativeNotice />
        </div>
        {children}
      </div>
    </div>
  );
}
