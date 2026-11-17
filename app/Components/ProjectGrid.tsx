"use client";

import { useState } from "react";
import { PROJECTS, type ProjectKind } from "../lib/data/projects";

const FILTERS: ("All" | ProjectKind)[] = ["All", "AI tooling", "Web apps"];

export default function ProjectGrid() {
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
    const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.kind === filter);

    return (
        <>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        type="button"
                        aria-pressed={filter === f}
                        onClick={() => setFilter(f)}
                        className={`chip ${filter === f ? "chip-on" : ""}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {shown.map((p) => (
                    <li key={p.title} className="panel card flex flex-col p-5">
                        <p className="mono text-xs text-muted">{p.kind}</p>
                        <h4 className="mt-1 text-lg font-semibold">{p.title}</h4>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                                <span key={t} className="tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mono mt-4 flex gap-4 border-t border-line pt-3 text-xs">
                            {p.live && (
                                <a href={p.live} target="_blank" rel="noreferrer" className="text-amber hover:underline">
                                    live site
                                </a>
                            )}
                            <a href={p.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
                                source code
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
