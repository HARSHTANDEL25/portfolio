import { FOCUS, SITE } from "../lib/data/site";
import { ORCHESTRATOR_FLOW } from "../lib/data/projects";
import FlowDiagram from "./FlowDiagram";

export default function Hero() {
    return (
        <section id="home" className="relative px-6 pb-20 pt-32 md:pt-40">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
                style={{ background: "radial-gradient(60% 60% at 85% 0%, rgba(255,122,61,0.14), transparent 70%)" }}
                aria-hidden
            />
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
                <div>
                    <p className="mono mb-5 flex items-center gap-2 text-sm text-muted">
                        <span className="inline-block h-2 w-2 rounded-full bg-ok" aria-hidden />
                        Software Engineer at Horizontal Digital &middot; Vadodara, India
                    </p>
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                        Hi, I&apos;m {SITE.name}.
                        <span className="mt-2 block text-muted">I build software with AI agents.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{SITE.tagline}</p>

                    <ul className="mt-7 flex flex-wrap gap-2" aria-label="What I work on">
                        {FOCUS.map((f) => (
                            <li key={f} className="tag text-ink">
                                {f}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a href="#work" className="btn btn-primary">
                            see my work
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
