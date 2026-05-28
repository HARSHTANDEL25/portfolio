export type Project = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
};

export const PROJECTS: Project[] = [
    {
        title: "KickOff",
        description: "Modern football Plateform bringing live scores, standings, team squads, H2H records, UCL/UEL knockout brackets, transfers and football-only news into one place. Covers the top 5 European leagues and UEFA competitions. Built on ESPN's football API and aggregated RSS feeds from BBC Sport, Sky Sports, Guardian, Goal.com and more.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/HARSHTANDEL25/Kickoff",
        live: "https://kickoff-one.vercel.app/",
    },
    {
        title: "StockTracker",
        description: "Real-time Indian stock market tracker with personal watchlist, IPO data, live market news, portfolio management, NSE API integration, Nifty/Sensex indices, crypto tracking, dark mode, and comprehensive stock fundamentals & financials.",
        tags: ["Next.js", "JavaScript", "Tailwind CSS", "NSE API", "Vercel"],
        github: "https://github.com/HARSHTANDEL25/stock-tracker",
        live: "https://stocktracker-two.vercel.app/",
    },
    {
        title: "EduVerse",
        description: "Learning Management Platform where teachers create, edit and manage courses while students browse, enroll and track chapter progress. Features video processing via MUX, image uploads via UploadThing, rich text editor, Stripe payments, Clerk auth, and course analytics dashboard.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "shadcn/ui", "Tailwind CSS", "Clerk", "Stripe", "MUX"],
        github: "https://github.com/HARSHTANDEL25/learning-managment-plateform",
    },
    {
        title: "Dream Palace",
        description: "Comprehensive real estate platform with property listings, advanced search & filtering, Google Auth + JWT, Stripe payments, and full landlord/tenant management.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Redux", "Tailwind CSS", "Stripe"],
        github: "https://github.com/HARSHTANDEL25/Dream-Place",
    },
    {
        title: "Sneaker Hub",
        description: "Sneaker e-commerce store with Stripe payment gateway, real-time cart operations, and tailored product recommendations.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe"],
        github: "https://github.com/HARSHTANDEL25/Sneaker_Hub",
    },
];
