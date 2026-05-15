"use client";

import { useEffect, useRef, useState } from "react";

function anim(visible: boolean, delay = 0) {
    const dur = visible ? "0.65s" : "0.25s";
    const d = visible ? `${delay}s` : "0s";
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(22px) scale(0.97)",
        transition: `opacity ${dur} cubic-bezier(0.22,1,0.36,1) ${d}, transform ${dur} cubic-bezier(0.22,1,0.36,1) ${d}`,
    };
}

type Project = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
};

const PROJECTS: Project[] = [
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
        description: " sneaker e-commerce store with Stripe payment gateway, real-time cart operations, and tailored product recommendations.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe"],

        github: "https://github.com/HARSHTANDEL25/Sneaker_Hub",
    },
];


function GitHubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">

            {/* Background blob */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-12">
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--purple)", ...anim(visible, 0) }}>
                        WHAT I&apos;VE BUILT
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white" style={anim(visible, 0.08)}>Projects</h2>
                    <div className="mt-4 h-px" style={{ background: "var(--purple)", ...anim(visible, 0.15), width: visible ? "64px" : "0px", transition: `width 0.5s cubic-bezier(0.22,1,0.36,1) ${visible ? "0.15s" : "0s"}, opacity 0.3s ease ${visible ? "0.15s" : "0s"}` }} />
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <div
                            key={project.title}
                            className="group flex flex-col justify-between p-6 rounded-2xl"
                            style={{
                                ...anim(visible, 0.2 + i * 0.08),
                                border: "1px solid rgba(59,130,246,0.15)",
                                background: "rgba(59,130,246,0.04)",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.border = "1px solid rgba(59,130,246,0.4)";
                                el.style.boxShadow = "0 0 24px rgba(59,130,246,0.1)";
                                el.style.transform = "translateY(-4px) scale(1)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.border = "1px solid rgba(59,130,246,0.15)";
                                el.style.boxShadow = "none";
                                el.style.transform = "translateY(0px) scale(1)";
                            }}
                        >
                            {/* Top */}
                            <div className="space-y-3 mb-6">
                                <h3 className="text-white font-semibold text-lg leading-snug">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                                            style={{
                                                background: "rgba(59,130,246,0.12)",
                                                color: "var(--purple)",
                                                border: "1px solid rgba(59,130,246,0.2)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-2 border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <GitHubIcon /> GitHub
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalIcon /> Live
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
