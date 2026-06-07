import { Badge } from "@/components/content/Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? <Badge tone="teal">{eyebrow}</Badge> : null}
      <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </header>
  );
}
