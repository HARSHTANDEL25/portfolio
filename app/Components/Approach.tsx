import { PRINCIPLES } from "../lib/data/site";
import Reveal from "./Reveal";

export default function Approach() {
    return (
        <section id="approach" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <p className="eyebrow mb-2">approach</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How I run agent-built work</h2>
                <ol className="mt-10 grid gap-4 md:grid-cols-2">
                    {PRINCIPLES.map((p, i) => (
                        <li key={p.title}>
                            <Reveal delay={i * 0.05} className="h-full">
                                <div className="panel h-full p-6">
                                    <span className="mono text-sm text-ember">{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{p.text}</p>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
