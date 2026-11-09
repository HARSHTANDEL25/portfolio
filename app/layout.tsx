import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Tandel | Software Engineer - AI Agents & Claude Code Workflows",
  description:
    "Software engineer who builds AI agents, Claude Code workflows and RAG applications using TypeScript, Node.js and Next.js.",
  keywords: [
    "Harsh Tandel",
    "AI engineer",
    "Claude Code",
    "AI agents",
    "RAG",
    "MCP",
    "Next.js",
    "TypeScript",
    "SitecoreAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
