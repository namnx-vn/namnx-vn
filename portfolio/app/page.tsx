"use client";
import { motion } from "framer-motion";
const projects=[
["Enterprise Design System","Scalable React + TypeScript UI platform"],
["Micro-Frontend Platform","Runtime composition with clear domain boundaries"],
["AI Reviewer Widget","AI-assisted requirement and code review"],
["React Performance Lab","Evidence-driven Core Web Vitals experiments"]
];
export default function Home(){return <main className="shell"><nav><strong>NXN</strong><span>Frontend Architect · AI Engineer</span></nav><section className="hero"><p className="eyebrow">REACT · TYPESCRIPT · ARCHITECTURE · AI</p><h1>Building frontend systems that scale.</h1><p className="lead">Senior Frontend Engineer focused on architecture, performance, developer experience and AI-powered engineering workflows.</p><div className="actions"><a href="#work">Selected work</a><a href="https://github.com/NamAppro">GitHub</a></div></section><section id="work"><h2>Selected work</h2><div className="grid">{projects.map(([name,desc])=><motion.article key={name} whileHover={{y:-4}}><h3>{name}</h3><p>{desc}</p></motion.article>)}</div></section></main>}
