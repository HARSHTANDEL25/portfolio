import { WORKFLOW } from "../lib/data/site";
import Reveal from "./Reveal";

export default function Workflow() {
    return (
        <section id="workflow" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-2">{"//03 - how I work"}</p>
                <Reveal>
                    <ol className="mono flex flex-wrap items-center gap-x-3 gap-y-2 text-lg md:text-2xl">
                        {WORKFLOW.map((w, i) => (
                            <li key={w} className="flex items-center gap-3">
                                <span className={i === 4 ? "text-ok" : "text-ink"}>{w}</span>
                                {i < WORKFLOW.length - 1 && (
                                    <span className="text-ember" aria-hidden>
                                        &rarr;
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                    <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                        Agents do the repetitive work; deterministic checks and a person decide what ships. Each
                        agent reads a shared knowledge base of rules, session logs and decision records before it
                        acts, so a fix made for one ticket is remembered for the next.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
