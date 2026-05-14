"use client";

import { useEffect, useRef, useState } from "react";
import {
    SiCss,
    SiExpress,
    SiFigma,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

const STACK = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "Tailwind", icon: SiTailwindcss },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
        ],
    },
    {
        category: "Database & ORM",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
            { name: "Postman", icon: SiPostman },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

// Returns inline style for staggered enter/exit animation
function anim(visible: boolean, delay = 0) {
    const dur = visible ? "0.65s" : "0.25s";
    const d = visible ? `${delay}s` : "0s";
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(22px)",
        transition: `opacity ${dur} cubic-bezier(0.22,1,0.36,1) ${d}, transform ${dur} cubic-bezier(0.22,1,0.36,1) ${d}`,
    };
}

export default function About() {
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
        <section id="about" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">

            {/* Background blob */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-16">
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--purple)", ...anim(visible, 0) }}>
                        GET TO KNOW ME
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white" style={anim(visible, 0.08)}>
                        About Me
                    </h2>
                    <div className="mt-4 h-px" style={{ background: "var(--purple)", ...anim(visible, 0.15), width: visible ? "64px" : "0px", transition: `width 0.5s cubic-bezier(0.22,1,0.36,1) ${visible ? "0.15s" : "0s"}, opacity 0.3s ease ${visible ? "0.15s" : "0s"}` }} />
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left — Bio */}
                    <div className="space-y-5">
                        <p className="text-gray-300 text-lg leading-relaxed" style={anim(visible, 0.2)}>
                            I&apos;m a <strong className="text-white">Frontend Developer and Freelancer</strong>{" "}
                            with <strong className="text-white">2+ years of experience</strong> building
                            fast, scalable, and modern web experiences.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed" style={anim(visible, 0.3)}>
                            I work extensively with{" "}
                            <strong style={{ color: "var(--purple)" }}>Next.js, React, and TypeScript</strong>
                            , and have hands-on experience with{" "}
                            <strong style={{ color: "var(--purple)" }}>headless CMS architectures</strong>{" "}
                            in professional environments.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed" style={anim(visible, 0.4)}>
                            I enjoy solving real problems with clean code and believe that great UX
                            and solid engineering always go together.
                        </p>
                    </div>

                    {/* Right — Tech stack */}
                    <div className="space-y-8">
                        {STACK.map((group, gi) => (
                            <div key={group.category} style={anim(visible, 0.2 + gi * 0.1)}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(({ name, icon: Icon }) => (
                                        <span
                                            key={name}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-default"
                                            style={{
                                                border: "1px solid rgba(59,130,246,0.25)",
                                                color: "var(--purple)",
                                                background: "rgba(59,130,246,0.06)",
                                            }}
                                        >
                                            <Icon size={13} />
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
