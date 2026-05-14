"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.35)",
                color: "var(--purple)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(16px)",
                pointerEvents: visible ? "auto" : "none",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(59,130,246,0.25)";
                el.style.boxShadow = "0 0 16px rgba(59,130,246,0.2)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(59,130,246,0.12)";
                el.style.boxShadow = "none";
            }}
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    );
}
