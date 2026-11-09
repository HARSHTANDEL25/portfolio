import { SITE, STATUS } from "../lib/data/site";
import { ORCHESTRATOR_FLOW } from "../lib/data/projects";
import FlowDiagram from "./FlowDiagram";

export default function Hero() {
    return (
        <section id="home" className="relative px-6 pb-20 pt-32 md:pt-36">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
                style={{ background: "radial-gradient(60% 60% at 15% 0%, rgba(255,122,61,0.16), transparent 70%)" }}
                aria-hidden
            />
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                <div>
                    <p className="eyebrow mb-4">
                        <span className="text-ink">&gt;</span>whoami<span className="blink">_</span>
                    </p>
                    <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">{SITE.name}</h1>
                    <p className="mono mt-3 text-base text-amber md:text-lg">{SITE.role}</p>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{SITE.tagline}</p>

                    <ul className="mono mt-8 space-y-2 text-sm">
                        {STATUS.map((s) => (
                            <li key={s.step} className="flex flex-wrap items-baseline gap-x-3">
                                <span className="text-muted">&#9656;{s.step}</span>
                                {s.state === "done" ? (
                                    <span className="text-ok">&#10003;done</span>
                                ) : (
                                    <span className="text-amber">
                                        <span className="spin">&#9680;</span> running
                                    </span>
                                )}
                                <span className="text-ink">{s.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a href="#systems" className="btn btn-primary">
                            view systems &rarr;
                        </a>
                        <a href={SITE.resumeUrl} className="btn" target="_blank" rel="noreferrer">
                            resume
                        </a>
                        <a href={SITE.github} className="btn" target="_blank" rel="noreferrer">
                            github
                        </a>
                    </div>
                </div>

                <FlowDiagram flow={ORCHESTRATOR_FLOW} layout="vertical" />
            </div>
        </section>
    );
}
