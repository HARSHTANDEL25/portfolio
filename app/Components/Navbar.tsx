"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../lib/data/site";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observers = NAV_LINKS.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.4 }
            );
            observer.observe(el);
            return observer;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "1px solid transparent",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
                    style={{ color: "var(--purple)" }}
                >
                    HT
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group relative text-sm transition-colors duration-200"
                                style={{ color: isActive ? "#ffffff" : "#9ca3af" }}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                                    style={{ background: "var(--purple)" }}
                                />
                            </a>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <a
                    href={SITE.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{
                        border: "1px solid rgba(59,130,246,0.5)",
                        color: "var(--purple)",
                        background: "rgba(59,130,246,0.05)",
                    }}
                >
                    Resume
                </a>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden relative w-6 h-5 p-0 flex flex-col justify-between"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="block w-full h-0.5 transition-all duration-300 origin-center"
                        style={{
                            background: "var(--purple)",
                            transform: menuOpen ? "translateY(9px) rotate(45deg)" : "none",
                        }}
                    />
                    <span
                        className="block w-full h-0.5 transition-all duration-300"
                        style={{
                            background: "var(--purple)",
                            opacity: menuOpen ? 0 : 1,
                            transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                        }}
                    />
                    <span
                        className="block w-full h-0.5 transition-all duration-300 origin-center"
                        style={{
                            background: "var(--purple)",
                            transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: menuOpen ? "300px" : "0px",
                    background: "rgba(9,9,11,0.95)",
                    backdropFilter: "blur(12px)",
                }}
            >
                <nav className="flex flex-col px-6 py-4 gap-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={SITE.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium w-fit px-4 py-2 rounded-full"
                        style={{
                            border: "1px solid rgba(59,130,246,0.5)",
                            color: "var(--purple)",
                        }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}
