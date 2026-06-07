import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { TopNav } from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: {
    default: "Agentic Accessibility Initiative",
    template: "%s | Agentic Accessibility"
  },
  description:
    "A vendor-neutral public initiative for trustworthy interaction between autonomous agents and digital services, with AWGS as the first standard."
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
