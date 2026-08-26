import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Nguyễn Xuân Nam — Frontend Architect", description:"Senior Frontend Engineer focused on React, TypeScript, Micro-Frontend and AI Engineering." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
