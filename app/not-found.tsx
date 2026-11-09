import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <p className="mono text-sm text-ember">&gt; exit code 404</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
            <p className="mt-3 max-w-sm text-muted">The agent looked everywhere and this route is not in the knowledge base.</p>
            <Link href="/" className="btn btn-primary mt-8">
                back to home
            </Link>
        </main>
    );
}
