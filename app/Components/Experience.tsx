import { CERTIFICATIONS, EXPERIENCE } from "../lib/data/experience";
import { STACK } from "../lib/data/projects";
import Reveal from "./Reveal";

export default function Experience() {
    return (
        <section id="experience" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-2">{"//04 - experience"}</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Where I do it</h2>

                {EXPERIENCE.map((e) => (
                    <Reveal key={e.company} className="mt-8">
                        <div className="panel p-6 md:p-8">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h3 className="text-xl font-semibold">
                                    {e.title} <span className="text-muted">at</span> {e.company}
                                </h3>
                                <span className="mono text-sm text-amber">{e.period}</span>
                            </div>
                            <p className="mono mt-1 text-xs text-muted">{e.place}</p>
                            <ul className="mt-5 space-y-3">
                                {e.bullets.map((b) => (
                                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                                        <span className="mono mt-0.5 text-ember" aria-hidden>
                                            &#9656;
                                        </span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="panel h-full p-6">
                            <p className="eyebrow mb-4">stack</p>
                            <dl className="space-y-4">
                                {STACK.map((g) => (
                                    <div key={g.category}>
                                        <dt className="mono mb-2 text-xs text-muted">{g.category}</dt>
                                        <dd className="flex flex-wrap gap-2">
                                            {g.items.map((i) => (
                                                <span key={i} className="tag text-ink">
                                                    {i}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div className="panel h-full p-6">
                            <p className="eyebrow mb-4">certifications</p>
                            <ul className="space-y-3">
                                {CERTIFICATIONS.map((c) => (
                                    <li key={c} className="flex gap-3 text-sm md:text-base">
                                        <span className="mono text-ok" aria-hidden>
                                            &#10003;
                                        </span>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                            <p className="mono mt-6 text-xs text-muted">education: B.Sc. Computer Science, A D Patel Institute of Technology (CGPA 8.20)</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
