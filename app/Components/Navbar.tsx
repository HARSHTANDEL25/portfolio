"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/data/site";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observers = NAV_LINKS.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const o = new IntersectionObserver(
                ([e]) => {
                    if (e.isIntersecting) setActive(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            o.observe(el);
            return o;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    return (
        <header
            className="fixed inset-x-0 top-0 z-50 transition-colors"
            style={{
                background: scrolled || open ? "rgba(14,14,17,0.88)" : "transparent",
                backdropFilter: scrolled || open ? "blur(10px)" : "none",
                borderBottom: `1px solid ${scrolled || open ? "var(--line)" : "transparent"}`,
            }}
        >
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
                <a href="#home" className="mono text-sm text-ink">
                    <span className="text-ember">&gt;</span> harsh<span className="text-muted">@agents</span>
                </a>

                <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={l.href}
                            className="mono text-[0.8rem] transition-colors"
                            style={{ color: active === l.id ? "var(--ember)" : "var(--muted)" }}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="mono text-sm text-muted md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "close" : "menu"}
                </button>
            </div>

            {open && (
                <nav id="mobile-nav" className="border-t border-line px-6 py-3 md:hidden" aria-label="Mobile">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="mono block py-2 text-sm text-muted"
                        >
                            go: {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
