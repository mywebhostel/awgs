export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const topNavItems: NavItem[] = [
  {
    label: "Vision",
    href: "/vision",
    children: [
      { label: "Agentic Accessibility", href: "/vision/agentic-accessibility" },
      { label: "Principles", href: "/vision/principles" },
      { label: "Manifesto", href: "/vision/manifesto" }
    ]
  },
  {
    label: "Standards",
    href: "/standards",
    children: [{ label: "AWGS 1.0", href: "/standards/awgs" }]
  },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Glossary", href: "/glossary" },
  { label: "Research", href: "/research" },
  { label: "Contribute", href: "/contribute" }
];

export const standardNavItems: NavItem[] = [
  { label: "Overview", href: "/standard/overview" },
  { label: "Principles", href: "/standard/principles" },
  { label: "Governance Domains", href: "/standard/governance-domains" },
  { label: "Compliance Levels", href: "/standard/compliance-levels" },
  { label: "Conformance", href: "/standard/conformance" },
  { label: "Assessment Model", href: "/standard/assessment-model" },
  { label: "Glossary", href: "/standard/glossary" },
  { label: "Future Roadmap", href: "/standard/future-roadmap" },
  { label: "Full Foundation Spec", href: "/standard/full" }
];

export const awgsNavItems: NavItem[] = [
  { label: "Overview", href: "/standards/awgs/overview" },
  { label: "Principles", href: "/standards/awgs/principles" },
  { label: "Governance Domains", href: "/standards/awgs/domains" },
  { label: "Compliance Levels", href: "/standards/awgs/compliance-levels" },
  { label: "Conformance", href: "/standards/awgs/conformance" },
  { label: "Assessment Model", href: "/standards/awgs/assessment-model" },
  { label: "Glossary", href: "/standards/awgs/glossary" },
  { label: "Future Work", href: "/standards/future-work" },
  { label: "Full Foundation Spec", href: "/standards/awgs/full" }
];
