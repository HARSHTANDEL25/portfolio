export type Flow = {
    title: string;
    nodes: FlowNode[][];
};

export type FlowNode = {
    title: string;
    sub?: string;
    tone?: "hub" | "agent" | "human" | "plain";
};

export type System = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    facts: string[];
    github?: string;
    note?: string;
    flow?: Flow;
};

export const SYSTEMS: System[] = [
    {
        id: "01",
        title: "Ozwa",
        description:
            "End-to-end AI workflow platform that builds components straight from Figma into SitecoreAI. Claude Code agents extract the design, model the content, build the Sitecore items and the Next.js component, and QA the result against Figma property by property.",
        tags: ["Next.js", "TypeScript", "Node.js", "SitecoreAI", "Figma API", "Claude Code", "Playwright"],
        facts: [
            "Dashboard-driven: a new project from the hub board sets up the GitHub repo, design tokens, SitecoreAI site and head app",
            "Plans the components from the Figma file and writes a functional spec for each",
            "Backend, frontend and QA agents run six steps; a person approves the model, the Sitecore write and the sign-off",
        ],
        note: "private repository",
    },
    {
        id: "02",
        title: "Knowledge Assistant",
        description:
            "Internal RAG chat assistant. Employees ask questions across HR, IT and per-project knowledge bases and get streamed answers with citations to the source document and page.",
        tags: ["Next.js", "TypeScript", "Supabase", "pgvector", "Groq", "Vercel AI SDK"],
        facts: [
            "Hybrid retrieval: pgvector semantic search plus Postgres full-text, fused with Reciprocal Rank Fusion",
            "Recent turns rewrite vague follow-ups before retrieval; a four-model Groq fallback chain covers rate limits",
            "Row Level Security restricts project knowledge bases per user; signup is company-only, checked in a database trigger",
            "Ingests from Google Drive, Confluence and file upload, with an admin panel for sync and access",
        ],
        github: "https://github.com/HARSHTANDEL25/knowledge-assistant",
        flow: {
            title: "request path",
            nodes: [
                [{ title: "Question", sub: "streamed chat", tone: "plain" }],
                [{ title: "Rewrite", sub: "uses recent turns", tone: "agent" }],
                [
                    { title: "Vector search", sub: "pgvector, 384-dim", tone: "plain" },
                    { title: "Full-text search", sub: "Postgres", tone: "plain" },
                ],
                [{ title: "RRF fusion", sub: "rank + merge", tone: "hub" }],
                [{ title: "LLM", sub: "Groq, 4-model fallback", tone: "agent" }],
                [{ title: "Cited answer", sub: "document + page", tone: "human" }],
            ],
        },
    },
];

export type ProjectKind = "AI tooling" | "Web apps";

export type Project = {
    title: string;
    kind: ProjectKind;
    text: string;
    tags: string[];
    github: string;
    live?: string;
};

export const PROJECTS: Project[] = [
    {
        title: "component-kit",
        kind: "AI tooling",
        text: "Claude Code plugin that builds UI components from a Figma link. A script extracts the design into a committed spec, a gate refuses out-of-scope props, and generation is held to the project's own tokens.",
        tags: ["Claude Code plugin", "Figma REST API", "JavaScript"],
        github: "https://github.com/HARSHTANDEL25/component-kit",
    },
    {
        title: "ai-starter-kit",
        kind: "AI tooling",
        text: "Personal Claude Code kit for front-end work: design and reasoning skills, plus an installable pipeline that pulls values from Figma and asserts the rendered DOM against them with Playwright.",
        tags: ["Claude Code skills", "Playwright", "Node.js"],
        github: "https://github.com/HARSHTANDEL25/ai-starter-kit",
    },
    {
        title: "Figma Generator",
        kind: "AI tooling",
        text: "Generates UI mockups from a text prompt. Built to learn how to wire OpenRouter models into a Next.js app, with Clerk sign-in and Drizzle on Neon Postgres.",
        tags: ["Next.js", "OpenRouter", "Drizzle", "Clerk"],
        github: "https://github.com/HARSHTANDEL25/Figma_generator",
    },
    {
        title: "KickOff",
        kind: "Web apps",
        text: "Football platform with live scores, standings, squads, head-to-head records and knockout brackets for the top European leagues.",
        tags: ["Next.js", "TypeScript"],
        github: "https://github.com/HARSHTANDEL25/Kickoff",
        live: "https://kickoff-one.vercel.app/",
    },
    {
        title: "StockTracker",
        kind: "Web apps",
        text: "Real-time Indian stock market tracker with a watchlist, IPO data, market news and NSE API integration.",
        tags: ["Next.js", "JavaScript", "NSE API"],
        github: "https://github.com/HARSHTANDEL25/stock-tracker",
        live: "https://stocktracker-two.vercel.app/",
    },
    {
        title: "Learning Management Platform",
        kind: "Web apps",
        text: "Course platform with teacher and student modes: course and chapter authoring with drag-and-drop ordering, Stripe checkout, Mux video, progress tracking and sales analytics.",
        tags: ["Next.js", "Prisma", "Stripe", "Mux", "Clerk"],
        github: "https://github.com/HARSHTANDEL25/learning-managment-plateform",
    },
    {
        title: "MY_CMS",
        kind: "Web apps",
        text: "Prototype content management system: authenticated authoring with a rich text and markdown editor, backed by Prisma.",
        tags: ["Next.js", "NextAuth", "Prisma"],
        github: "https://github.com/HARSHTANDEL25/MY_CMS",
    },
];

export const ORCHESTRATOR_FLOW: Flow = {
    title: "orchestrator",
    nodes: [
        [{ title: "Task", sub: "ticket, brief or design", tone: "plain" }],
        [{ title: "Orchestrator", sub: "plans, routes, tracks state", tone: "hub" }],
        [
            { title: "Planner agent", sub: "breaks the work down", tone: "agent" },
            { title: "Coder agent", sub: "implements on a branch", tone: "agent" },
            { title: "QA agent", sub: "tests and checks", tone: "agent" },
        ],
        [{ title: "Human review", sub: "approve or send back", tone: "human" }],
        [{ title: "Shipped", sub: "merged pull request", tone: "plain" }],
    ],
};

export const STACK = [
    { category: "AI & agents", items: ["Claude Code", "MCP", "Sub-agents", "Skills & hooks", "Prompt & context engineering", "RAG", "Groq", "Vercel AI SDK"] },
    { category: "Full stack", items: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "SitecoreAI"] },
    { category: "Data", items: ["PostgreSQL", "pgvector", "Supabase (RLS)", "MongoDB", "MySQL"] },
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
];
