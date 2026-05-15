"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROLES = [
    "Full Stack Developer",
    "Freelancer",
    "Frontend Developer",
    "CMS Developer",
];

export default function Hero() {
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = ROLES[wordIndex];

        // when charIndex < length, add next letter
        if (!isDeleting && charIndex < currentWord.length) {
            const timer = setTimeout(() => setCharIndex((c) => c + 1), 120);
            return () => clearTimeout(timer);
        }

        // when charIndex === length, pause for 1.5s and start deleting last letter
        if (!isDeleting && charIndex === currentWord.length) {
            const timer = setTimeout(() => setIsDeleting(true), 1500);
            return () => clearTimeout(timer);
        }
        //when charIndex === 0, start typing next word
        if (isDeleting && charIndex > 0) {
            const timer = setTimeout(() => setCharIndex((c) => c - 1), 60);
            return () => clearTimeout(timer);
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % ROLES.length);
        }
    }, [charIndex, isDeleting, wordIndex]);

    const displayedText = ROLES[wordIndex].slice(0, charIndex);

    return (
        <section id="home" className="relative  flex items-center px-6 py-24 overflow-hidden">

            {/* Background gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-35 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
                    style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left — text content */}
                    <div className="flex-[6] space-y-7">

                        {/* Open to work badge */}
                        <div
                            className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
                            style={{
                                border: "1px solid rgba(59,130,246,0.4)",
                                color: "var(--purple)",
                                background: "rgba(59,130,246,0.08)",
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Open to freelance work
                        </div>

                        {/* Greeting + Name */}
                        <div className="space-y-2">
                            <p className="animate-fade-in-up delay-200 text-gray-400 text-xl">
                                Hi There! <span role="img" aria-label="wave">👋🏻</span>
                            </p>
                            <h1
                                className="animate-fade-in-up delay-300 text-5xl md:text-6xl font-bold leading-tight"
                                style={{ color: "var(--foreground)" }}
                            >
                                I&apos;M{" "}
                                <span style={{ color: "var(--purple)" }}>HARSH TANDEL</span>
                            </h1>
                        </div>

                        {/* Typewriter */}
                        <div className="animate-fade-in-up delay-400 h-10 flex items-center gap-1">
                            <span className="text-2xl font-medium" style={{ color: "var(--purple)" }}>
                                {displayedText}
                            </span>
                            <span className="text-2xl font-medium animate-pulse" style={{ color: "var(--purple)" }}>
                                |
                            </span>
                        </div>

                        {/* Bio */}
                        <p className="animate-fade-in-up delay-400 text-gray-300 text-lg leading-relaxed max-w-xl">
                            I craft fast, content-driven web apps with{" "}
                            <strong style={{ color: "var(--purple)" }}>React, Next.js, and TypeScript</strong>
                            {" "}— with hands-on experience in{" "}
                            <strong style={{ color: "var(--purple)" }}>headless CMS</strong>.
                        </p>

                        {/* CTA buttons */}
                        <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
                                style={{ background: "var(--purple-dim)" }}
                            >
                                View My Work
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1LURUdtOutc0YUna0sTRn5rVs7CFv7Uf-/view"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                                style={{
                                    border: "1px solid rgba(59,130,246,0.5)",
                                    color: "var(--purple)",
                                    background: "rgba(59,130,246,0.05)",
                                }}
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Social icons */}
                        <div className="animate-fade-in-up delay-600 flex gap-4 pt-1">
                            <SocialLink href="https://github.com/HARSHTANDEL25" label="GitHub">
                                <GitHubIcon />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Right — avatar (swap HT initials with <Image> once you have your photo) */}
                    <div className="animate-fade-in delay-300 flex-[4] flex justify-center">
                        <div
                            className="animate-glow w-full max-w-sm aspect-square rounded-full overflow-hidden select-none"
                            style={{ border: "2px solid rgba(59,130,246,0.4)" }}
                        >
                            <Image
                                src="/avtar.png"
                                alt="Harsh Tandel — Developer Avatar"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover scale-[1.08]"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="p-3 rounded-full transition-colors"
            style={{
                border: "1px solid rgba(59,130,246,0.4)",
                color: "var(--purple)",
            }}
            onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(59,130,246,0.1)")
            }
            onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")
            }
        >
            {children}
        </a>
    );
}

function GitHubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

