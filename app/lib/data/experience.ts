export type ExperienceEntry = {
    company: string;
    title: string;
    period: string;
    place: string;
    bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
    {
        company: "Horizontal Digital",
        title: "Software Engineer",
        period: "June 2025 - Present",
        place: "Vadodara, Gujarat",
        bullets: [
            "Transitioned the full software development lifecycle into an AI-based pipeline on Claude Code, from Figma and requirements through build, QA and release on SitecoreAI.",
            "Contributed to an autonomous ticket-delivery agent on Claude Code: it triages open tickets, then an unattended runner takes each assigned ticket in a fresh Claude Code session, delivers it on its own branch behind guard gates and spend caps, writes a full run record, and also runs component discovery, builds and QA handoffs that end in a draft pull request.",
            "Built and maintained the project knowledge base that agents read before they act: topic pages with distilled rules, dated session logs and decision records, so lessons from one ticket carry into the next.",
            "Contributed Claude Code skills, specialist sub-agents and slash commands (SitecoreAI, serialization, Figma, analytics, accessibility, git) that take a ticket or a component build from brief to pushed branch.",
            "Delivered components on SitecoreAI with Next.js and TypeScript, working from Figma, functional specs and the existing site, and generated component documentation from one structured spec so docs and builds stay in step.",
        ],
    },
];

export const CERTIFICATIONS = [
    "SitecoreAI CMS Certified Developer",
    "Claude with the Anthropic API",
    "Introduction to Model Context Protocol",
    "Claude Code in Action",
    "Introduction to Agent Skills",
];
