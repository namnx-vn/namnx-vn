"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, Cpu, Layers3, Gauge, Bot } from "lucide-react";
import { projects, site, skills, timeline } from "../data/site";

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top">NXN<span>.</span></a>
        <div className="navLinks"><a href="#work">Work</a><a href="#architecture">Architecture</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="navCta" href={site.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
      </nav>

      <section id="top" className="hero wrap">
        <motion.div initial="hidden" animate="show" variants={fade}>
          <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR SELECTED OPPORTUNITIES</div>
          <h1>Frontend systems.<br/><em>AI-native</em> engineering.</h1>
          <p className="heroText">I design and build scalable frontend platforms with React and TypeScript — from micro-frontends and design systems to AI-assisted developer workflows.</p>
          <div className="heroActions"><a className="button primary" href="#work">Explore work <ArrowUpRight size={17}/></a><a className="button ghost" href="/resume.pdf"><Download size={17}/> Resume</a></div>
        </motion.div>
        <motion.div className="heroCard" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }}>
          <div className="gridGlow"/><div className="terminal"><div className="dots"><i/><i/><i/></div><pre>{`const engineer = {
  focus: [
    "frontend architecture",
    "micro-frontends",
    "AI engineering",
  ],
  principle: "measure → simplify → automate"
};`}</pre></div>
        </motion.div>
      </section>

      <section className="stats wrap"><Stat value="React + TS" label="Core stack"/><Stat value="MFE" label="Architecture"/><Stat value="AI" label="Engineering"/><Stat value="Web Vitals" label="Performance"/></section>

      <section id="about" className="section wrap twoCol">
        <div><p className="kicker">01 / ABOUT</p><h2>Engineering with a systems mindset.</h2></div>
        <div className="copy"><p>{site.description}</p><p>I care about boundaries, contracts, observability and developer experience. The goal is not to make a frontend impressive — it is to make the system easier to evolve.</p><div className="skillCloud">{skills.map(s => <span key={s}>{s}</span>)}</div></div>
      </section>

      <section id="architecture" className="section darkBand"><div className="wrap twoCol"><div><p className="kicker">02 / ARCHITECTURE</p><h2>Boundaries before abstractions.</h2><p className="muted">A practical architecture model for teams shipping independently without turning the frontend into a distributed monolith.</p></div><div className="architecture"><div>HOST / SHELL</div><div className="archRow"><span>REMOTE A</span><span>REMOTE B</span><span>SHARED PLATFORM</span></div><div>APIs · SDKs · OBSERVABILITY</div></div></div></section>

      <section id="work" className="section wrap"><div className="sectionHead"><div><p className="kicker">03 / SELECTED WORK</p><h2>Projects with an engineering point of view.</h2></div><span className="count">{String(projects.length).padStart(2, "0")} PROJECTS</span></div><div className="projectGrid">{projects.map((p, i) => <motion.article key={p.title} className="project" whileHover={{ y: -6 }} transition={{ duration: .2 }}><div className="projectNo">0{i + 1}</div><p className="projectCat">{p.category} · {p.status}</p><h3>{p.title}</h3><p className="muted">{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><ArrowUpRight className="projectArrow" size={19}/></motion.article>)}</div></section>

      <section className="section wrap twoCol"><div><p className="kicker">04 / AI ENGINEERING</p><h2>Developer tooling, not AI theater.</h2></div><div className="featureList"><Feature icon={<Bot/>} title="AI Reviewer" text="Validate requirements, architecture, React patterns, tests and performance risks."/><Feature icon={<Cpu/>} title="Engineering Copilot" text="Connect Jira, GitHub, ADRs, RFCs and documentation into a useful engineering context."/><Feature icon={<Layers3/>} title="Agent Skills" text="Turn repeatable engineering workflows into composable, auditable capabilities."/><Feature icon={<Gauge/>} title="Performance" text="Use LCP, INP, bundle size and runtime profiling as engineering signals."/></div></section>

      <section className="section timelineBand"><div className="wrap"><p className="kicker">05 / TIMELINE</p><div className="timeline">{timeline.map(t => <div className="timelineItem" key={t.year}><strong>{t.year}</strong><div><h3>{t.title}</h3><p>{t.text}</p></div></div>)}</div></div></section>

      <section id="contact" className="section wrap contact"><p className="kicker">06 / CONTACT</p><h2>Let's build something<br/><em>worth shipping.</em></h2><p className="muted">Open to senior/staff frontend, frontend architecture and AI engineering opportunities.</p><div className="contactLinks"><a href={site.github} target="_blank" rel="noreferrer"><Github/> GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:your.email@example.com"><Mail/> Email</a></div></section>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} Nguyễn Xuân Nam</span><span>React · TypeScript · Architecture · AI</span></footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="feature"><div className="icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>; }
