import { SYSTEMS } from "../lib/data/projects";
import { SITE } from "../lib/data/site";
import FlowDiagram from "./FlowDiagram";
import ProjectGrid from "./ProjectGrid";
import Reveal from "./Reveal";

export default function Work() {
    return (
        <section id="work" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-2">my work</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Things I have built</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    Two larger systems first, then the tools and apps from my GitHub.
                </p>

                <div className="mt-10 space-y-8">
                    {SYSTEMS.map((s) => (
                        <Reveal key={s.id}>
                            <article className="panel p-6 md:p-8">
                                <div className="flex flex-wrap items-baseline justify-between gap-3">
                                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                                    {s.github ? (
                                        <a href={s.github} target="_blank" rel="noreferrer" className="mono text-sm text-amber hover:underline">
                                            view code
                                        </a>
                                    ) : (
                                        <span className="mono text-xs text-muted">{s.note}</span>
                                    )}
                                </div>
                                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{s.description}</p>
                                <ul className="mt-5 grid gap-x-8 gap-y-2 md:grid-cols-2">
                                    {s.facts.map((f) => (
                                        <li key={f} className="flex gap-3 text-sm text-ink">
                                            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ember" aria-hidden />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {s.tags.map((t) => (
                                        <span key={t} className="tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {s.flow && (
                                    <div className="mt-6">
                                        <FlowDiagram flow={s.flow} />
                                    </div>
                                )}
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-14">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="text-xl font-semibold">Projects</h3>
                        <a href={`${SITE.github}?tab=repositories`} target="_blank" rel="noreferrer" className="mono text-sm text-amber hover:underline">
                            all repositories on GitHub
                        </a>
                    </div>
                    <ProjectGrid />
                </Reveal>
            </div>
        </section>
    );
}
