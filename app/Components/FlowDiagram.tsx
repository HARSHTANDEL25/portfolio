import type { Flow } from "../lib/data/projects";

type Props = {
    flow: Flow;
    /** "vertical" always stacks; "responsive" stacks on small screens and runs left to right on wide ones. */
    layout?: "vertical" | "responsive";
};

export default function FlowDiagram({ flow, layout = "responsive" }: Props) {
    const cls = layout === "vertical" ? "flow flow-v" : "flow flow-r";
    return (
        <figure className="panel p-4 md:p-5" aria-label={`${flow.title} diagram`}>
            <figcaption className="eyebrow mb-4 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-ember blink" aria-hidden />
                {flow.title}
            </figcaption>
            <ol className={cls}>
                {flow.nodes.map((group, gi) => (
                    <li key={gi} className="contents">
                        {gi > 0 && <span className="link" aria-hidden />}
                        <div className="flow-group">
                            {group.map((n) => (
                                <div key={n.title} className={`node node-${n.tone ?? "plain"}`}>
                                    <b>{n.title}</b>
                                    {n.sub && <span>{n.sub}</span>}
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        </figure>
    );
}
