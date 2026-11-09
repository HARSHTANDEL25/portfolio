"use client";

import { useState } from "react";
import { SITE } from "../lib/data/site";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const field =
    "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ember";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("failed");
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
        setTimeout(() => setStatus("idle"), 5000);
    }

    const label =
        status === "sending" ? "sending..." : status === "sent" ? "sent ✓" : status === "error" ? "failed - try again" : "send message";

    return (
        <section id="contact" className="px-6 py-20">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                <Reveal>
                    <p className="eyebrow mb-2">{"//05 - contact"}</p>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Building with agents?</h2>
                    <p className="mt-4 max-w-md leading-relaxed text-muted">
                        Glad to talk agent workflows, Claude Code setups, RAG apps and SitecoreAI delivery - a hard
                        problem, or just comparing notes.
                    </p>
                    <div className="mono mt-6 space-y-2 text-sm">
                        <p>
                            <span className="text-muted">email: </span>
                            <a className="text-amber hover:underline" href={`mailto:${SITE.email}`}>
                                {SITE.email}
                            </a>
                        </p>
                        <p>
                            <span className="text-muted">github: </span>
                            <a className="text-amber hover:underline" href={SITE.github} target="_blank" rel="noreferrer">
                                github.com/HARSHTANDEL25
                            </a>
                        </p>
                        <p>
                            <span className="text-muted">based in: </span>
                            {SITE.location}
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.08}>
                    <form onSubmit={onSubmit} className="panel space-y-4 p-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mono mb-1.5 block text-xs text-muted">name</span>
                                <input name="name" value={form.name} onChange={onChange} required className={field} />
                            </label>
                            <label className="block">
                                <span className="mono mb-1.5 block text-xs text-muted">email</span>
                                <input name="email" type="email" value={form.email} onChange={onChange} required className={field} />
                            </label>
                        </div>
                        <label className="block">
                            <span className="mono mb-1.5 block text-xs text-muted">message</span>
                            <textarea name="message" rows={5} value={form.message} onChange={onChange} required className={`${field} resize-none`} />
                        </label>
                        <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full justify-center disabled:opacity-60">
                            {label}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
