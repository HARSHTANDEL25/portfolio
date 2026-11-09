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

export const ALSO_BUILT = [
    {
        title: "KickOff",
        text: "Football platform with live scores, standings, squads, H2H records and knockout brackets for the top European leagues.",
        github: "https://github.com/HARSHTANDEL25/Kickoff",
        live: "https://kickoff-one.vercel.app/",
    },
    {
        title: "StockTracker",
        text: "Real-time Indian stock market tracker with watchlist, IPO data, market news and NSE API integration.",
        github: "https://github.com/HARSHTANDEL25/stock-tracker",
        live: "https://stocktracker-two.vercel.app/",
    },
];

export const ORCHESTRATOR_FLOW: Flow = {
    title: "orchestrator",
    nodes: [
        [{ title: "Figma design", sub: "library + page designs", tone: "plain" }],
        [{ title: "Orchestrator", sub: "reads the knowledge base first", tone: "hub" }],
        [
            { title: "BED agent", sub: "model + Sitecore items", tone: "agent" },
            { title: "FED agent", sub: "Next.js component", tone: "agent" },
        ],
        [{ title: "QA agent", sub: "fidelity, a11y, Playwright", tone: "agent" }],
        [{ title: "You approve", sub: "model, write, sign-off", tone: "human" }],
        [{ title: "PR-ready", sub: "component, Pages-editable", tone: "plain" }],
    ],
};

export const STACK = [
    { category: "AI & agents", items: ["Claude Code", "MCP", "Sub-agents", "Skills & hooks", "Prompt & context engineering", "RAG", "Groq", "Vercel AI SDK"] },
    { category: "Full stack", items: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "SitecoreAI"] },
    { category: "Data", items: ["PostgreSQL", "pgvector", "Supabase (RLS)", "MongoDB", "MySQL"] },
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
];
