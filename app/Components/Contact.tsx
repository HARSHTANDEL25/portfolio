"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function anim(visible: boolean, delay = 0) {
    const dur = visible ? "0.65s" : "0.25s";
    const d = visible ? `${delay}s` : "0s";
    return {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(22px)",
        transition: `opacity ${dur} cubic-bezier(0.22,1,0.36,1) ${d}, transform ${dur} cubic-bezier(0.22,1,0.36,1) ${d}`,
    };
}

const CONTACT_LINKS = [
    {
        icon: MdEmail,
        label: "Email",
        value: "harshtandel2508@gmail.com",
        href: "mailto:harshtandel2508@gmail.com",
    },
    {
        icon: SiGithub,
        label: "GitHub",
        value: "github.com/HARSHTANDEL25",
        href: "https://github.com/HARSHTANDEL25",
    },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    }

    const inputBase: React.CSSProperties = {
        background: "rgba(59,130,246,0.04)",
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: "12px",
        color: "#ededed",
        outline: "none",
        width: "100%",
        padding: "12px 16px",
        fontSize: "0.9rem",
        transition: "border-color 0.2s ease",
    };

    const btnStyle: React.CSSProperties =
        status === "sent"
            ? { background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", color: "#86efac" }
            : status === "error"
                ? { background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5" }
                : { background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.4)", color: "var(--purple)" };

    const btnLabel =
        status === "sending" ? "Sending…"
            : status === "sent" ? "Message sent ✓"
                : status === "error" ? "Something went wrong — try again"
                    : "Send Message";

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">

            {/* Background blob */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full opacity-10 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-16">
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--purple)", ...anim(visible, 0) }}>
                        GET IN TOUCH
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white" style={anim(visible, 0.08)}>
                        Contact
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

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left — info */}
                    <div className="space-y-8">
                        <div className="space-y-4" style={anim(visible, 0.2)}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                Let&apos;s work<br />
                                <span style={{ color: "var(--purple)" }}>together.</span>
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                I&apos;m currently available for new work. If you&apos;re looking
                                for a developer to bring your idea to life, let&apos;s talk about
                                the next big thing!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl group"
                                    style={{
                                        border: "1px solid rgba(59,130,246,0.15)",
                                        background: "rgba(59,130,246,0.04)",
                                        ...anim(visible, 0.28 + i * 0.08),
                                        textDecoration: "none",
                                        transition: `border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${visible ? `${0.28 + i * 0.08}s` : "0s"}, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${visible ? `${0.28 + i * 0.08}s` : "0s"}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "rgba(59,130,246,0.4)";
                                        el.style.boxShadow = "0 0 20px rgba(59,130,246,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = "rgba(59,130,246,0.15)";
                                        el.style.boxShadow = "none";
                                    }}
                                >
                                    <span
                                        className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                                        style={{
                                            background: "rgba(59,130,246,0.1)",
                                            color: "var(--purple)",
                                        }}
                                    >
                                        <Icon size={18} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        style={anim(visible, 0.25)}
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-gray-500 uppercase tracking-wider">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    style={inputBase}
                                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                                    onBlur={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.2)")}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    style={inputBase}
                                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                                    onBlur={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.2)")}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Tell me about your project..."
                                style={{ ...inputBase, resize: "none" }}
                                onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                                onBlur={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.2)")}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-3 px-6 rounded-xl text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                            style={{ ...btnStyle, transition: "all 0.3s ease" }}
                        >
                            {btnLabel}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
