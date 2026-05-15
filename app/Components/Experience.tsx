"use client";

import { useEffect, useRef, useState } from "react";

function anim(visible: boolean, delay = 0) {
    const dur = visible ? "0.65s" : "0.25s";
    const d = visible ? `${delay}s` : "0s";
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(22px)",
        transition: `opacity ${dur} cubic-bezier(0.22,1,0.36,1) ${d}, transform ${dur} cubic-bezier(0.22,1,0.36,1) ${d}`,
    };
}

export default function Experience() {
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
        <section id="experience" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">

            {/* Background blob */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full opacity-10 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-12">
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--purple)", ...anim(visible, 0) }}>
                        WHERE I&apos;VE WORKED
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white" style={anim(visible, 0.08)}>
                        Experience
                    </h2>
                    <div
                        className="mt-4 h-px"
                        style={{
                            background: "var(--purple)",
                            ...anim(visible, 0.15),
                            width: visible ? "64px" : "0px",
                            transition: `width 0.5s cubic-bezier(0.22,1,0.36,1) ${visible ? "0.15s" : "0s"}, opacity 0.3s ease ${visible ? "0.15s" : "0s"}`,
                        }}
                    />
                </div>

                {/* Timeline */}
                <div className="relative max-w-2xl" style={anim(visible, 0.22)}>

                    {/* Vertical line */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-px"
                        style={{ background: "rgba(59,130,246,0.2)" }}
                    />

                    <div className="pl-8 space-y-6 relative">

                        {/* Entry 1 — Full-time */}
                        <div className="relative">
                            <div
                                className="absolute left-0 top-5 -translate-x-[calc(2rem+1px)] w-3 h-3 rounded-full"
                                style={{
                                    background: "var(--purple)",
                                    boxShadow: "0 0 8px rgba(59,130,246,0.6)",
                                }}
                            />
                            <div
                                className="p-6 rounded-2xl"
                                style={{
                                    border: "1px solid rgba(59,130,246,0.15)",
                                    background: "rgba(59,130,246,0.04)",
                                }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Software Engineer</h3>
                                        <p className="text-sm mt-0.5" style={{ color: "var(--purple)" }}>Full-time</p>
                                    </div>
                                    <span
                                        className="text-xs font-medium px-3 py-1.5 rounded-full w-fit"
                                        style={{
                                            background: "rgba(59,130,246,0.1)",
                                            border: "1px solid rgba(59,130,246,0.2)",
                                            color: "var(--purple)",
                                        }}
                                    >
                                        2025 – Present
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Building token-based multisite architecture for a pan-European student accommodation platform",
                                        "Working with headless CMS to deliver flexible, content-driven experiences across multiple regions",
                                        "Developing and maintaining multisite projects serving properties across the UK and Europe with localised content",
                                        "Contributing to a property management system used for listing properties for students and residents",
                                        "UI improvements for the resident-facing portal and mobile-first responsive layouts",
                                    ].map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--purple)" }} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Entry 2 — Internship */}
                        <div className="relative">
                            <div
                                className="absolute left-0 top-5 -translate-x-[calc(2rem+1px)] w-3 h-3 rounded-full"
                                style={{
                                    background: "rgba(59,130,246,0.4)",
                                    border: "2px solid rgba(59,130,246,0.6)",
                                }}
                            />
                            <div
                                className="p-6 rounded-2xl"
                                style={{
                                    border: "1px solid rgba(59,130,246,0.15)",
                                    background: "rgba(59,130,246,0.04)",
                                }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Frontend Developer Intern</h3>
                                        <p className="text-sm mt-0.5" style={{ color: "var(--purple)" }}>Internship</p>
                                    </div>
                                    <span
                                        className="text-xs font-medium px-3 py-1.5 rounded-full w-fit"
                                        style={{
                                            background: "rgba(59,130,246,0.1)",
                                            border: "1px solid rgba(59,130,246,0.2)",
                                            color: "var(--purple)",
                                        }}
                                    >
                                        2024
                                    </span>
                                </div>
                                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                    Developed a full-featured e-commerce web application using React, focusing on product listings, cart functionality, and a seamless checkout experience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
