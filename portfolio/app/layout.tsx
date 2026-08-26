import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Xuân Nam — Frontend Architect & AI Engineer",
  description: "Senior Frontend Engineer focused on React, TypeScript, Micro-Frontend, performance and AI engineering.",
  keywords: ["React", "TypeScript", "Frontend Architect", "AI Engineer", "Micro-Frontend", "Next.js"],
  openGraph: { title: "Nguyễn Xuân Nam — Frontend Architect", description: "React · TypeScript · Micro-Frontend · AI Engineering", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
