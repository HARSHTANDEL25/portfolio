import { SITE } from "../lib/data/site";

export default function Footer() {
    return (
        <footer className="border-t border-line px-6 py-8">
            <div className="mono mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted">
                <span>
                    <span className="text-ember">&gt;</span> {SITE.name} &middot; {new Date().getFullYear()}
                </span>
                <span>built with Next.js &middot; designed and shipped with Claude Code</span>
            </div>
        </footer>
    );
}
