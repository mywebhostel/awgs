import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-ink">Agentic Web Governance Standard</p>
            <p className="mt-1 text-sm text-slate-600">Vendor-neutral governance guidance for the Agentic Web.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/standard">Standard</Link>
            <Link href="/knowledge-base">Knowledge Base</Link>
            <Link href="/contribute">Contribute</Link>
            <Link href="/changelog">Change Log</Link>
            <Link href="/versions">Versions</Link>
            <Link href="/website-log">Website Log</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
        <p className="text-xs text-slate-500">AWGS 1.0 Foundation Specification. Public Draft Standard.</p>
      </div>
    </footer>
  );
}
