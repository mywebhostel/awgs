import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { TopNav } from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: {
    default: "Agentic Web Governance Standard",
    template: "%s | AWGS"
  },
  description:
    "A vendor-neutral public draft standard for safe, transparent, interoperable, accountable, and trustworthy agentic web interactions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <TopNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
