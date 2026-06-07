import { SidebarNav } from "@/components/layout/SidebarNav";

export default function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
      <SidebarNav />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
