import { ALSO_BUILT, SYSTEMS } from "../lib/data/projects";
import FlowDiagram from "./FlowDiagram";
import Reveal from "./Reveal";

export default function Systems() {
    return (
        <section id="systems" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-2">{"//02 - systems"}</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I build</h2>

                <div className="mt-10 space-y-8">
                    {SYSTEMS.map((s) => (
                        <Reveal key={s.id}>
                            <article className="panel p-6 md:p-8">
                                <div className="flex flex-wrap items-baseline justify-between gap-3">
                                    <h3 className="text-2xl font-semibold">
                                        <span className="mono mr-3 text-base text-ember">{s.id}</span>
                                        {s.title}
                                    </h3>
                                    {s.github ? (
                                        <a href={s.github} target="_blank" rel="noreferrer" className="mono text-sm text-amber hover:underline">
                                            github &rarr;
                                        </a>
                                    ) : (
                                        <span className="mono text-xs text-muted">{s.note}</span>
                                    )}
                                </div>
                                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{s.description}</p>
                                <ul className="mt-5 grid gap-2 md:grid-cols-2">
                                    {s.facts.map((f) => (
                                        <li key={f} className="flex gap-2 text-sm text-ink">
                                            <span className="mono text-ember" aria-hidden>
                                                &#9656;
                                            </span>
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

                <Reveal className="mt-10">
                    <p className="eyebrow mb-3">also built</p>
                    <ul className="grid gap-3 md:grid-cols-2">
                        {ALSO_BUILT.map((p) => (
                            <li key={p.title} className="panel p-5">
                                <div className="flex items-baseline justify-between gap-3">
                                    <h3 className="font-semibold">{p.title}</h3>
                                    <span className="mono flex gap-3 text-xs">
                                        <a href={p.live} target="_blank" rel="noreferrer" className="text-amber hover:underline">
                                            live
                                        </a>
                                        <a href={p.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
                                            code
                                        </a>
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted">{p.text}</p>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
