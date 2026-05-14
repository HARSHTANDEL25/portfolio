import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }}
                />
            </div>

            {/* 404 number */}
            <p
                className="text-[8rem] md:text-[12rem] font-bold leading-none select-none"
                style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(59,130,246,0.3)",
                }}
            >
                404
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Page not found
            </h1>
            <p className="text-gray-400 mt-3 max-w-sm">
                Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
            </p>

            <Link
                href="/"
                className="mt-8 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.4)",
                    color: "var(--purple)",
                }}
            >
                Back to Home
            </Link>
        </div>
    );
}
