# 👋 Nguyễn Xuân Nam — Senior Frontend / AI Engineer

<p align="center">
  <img src="./assets/banner.svg" alt="Nguyen Xuan Nam — Frontend Architect / AI Engineer" width="100%">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=2800&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=Senior+Frontend+Engineer;Frontend+Architect;React+%2B+TypeScript+Specialist;Micro-Frontend+Architect;AI+Engineering+%26+Developer+Tooling;System+Design+%7C+Performance+%7C+DX" alt="Typing animation">
</p>

> Building scalable frontend systems, developer platforms, and AI-assisted engineering workflows.

---

## 🧭 Navigation

- [About](#-about)
- [Engineering Focus](#-engineering-focus)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Featured Work](#-featured-work)
- [AI Engineering](#-ai-engineering)
- [Performance](#-performance-engineering)
- [Micro-Frontend](#-micro-frontend)
- [System Design](#-system-design)
- [GitHub Analytics](#-github-analytics)
- [Contribution Snake](#-contribution-snake)
- [Career](#-career)
- [Contact](#-contact)

---

## 👨‍💻 About

I am a Senior Frontend Engineer focused on **React, TypeScript, Micro-Frontend architecture, performance, and AI-powered developer tooling**.

My engineering approach is centered around:

- Clear architectural boundaries
- Strong type safety
- Scalable component systems
- Incremental delivery
- Observable performance
- Developer experience
- Automated quality gates
- AI-assisted engineering

I enjoy working on problems where frontend engineering meets architecture, platform engineering, and applied AI.

### Current positioning

| Area | Focus |
|---|---|
| Frontend | React, TypeScript, Next.js |
| Architecture | Micro-Frontend, Module Federation |
| Platform | Design Systems, shared libraries |
| AI | Coding agents, RAG, AI review workflows |
| Quality | Testing, static analysis, CI/CD |
| Performance | Core Web Vitals, rendering, bundle strategy |
| Leadership | System design, technical direction, mentoring |

---

## 🎯 Engineering Focus

### Frontend Architecture

I design frontend systems that can evolve without creating unnecessary coupling.

Key areas:

- Application boundaries
- Shared dependencies
- Runtime composition
- API contracts
- State ownership
- Design system governance
- Versioning strategy
- Error isolation
- Observability

### AI Engineering

I am interested in practical AI systems for software engineering:

- AI code review
- Requirement verification
- Repository-aware agents
- RAG over engineering knowledge
- Agent Skills
- MCP integrations
- Coding workflows
- Automated documentation

### Developer Experience

A good architecture should make the correct path easy.

I care about:

- Fast local feedback
- Reliable CI
- Reproducible builds
- Strong conventions
- Automated checks
- Useful developer tooling

---

## 🏗️ Architecture

```text
                         ┌──────────────────────────┐
                         │       User / Browser     │
                         └────────────┬─────────────┘
                                      │
                         ┌────────────▼─────────────┐
                         │       Host Application   │
                         │   Routing / Auth / Shell  │
                         └────────────┬─────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
      ┌───────▼────────┐     ┌────────▼───────┐      ┌──────▼─────────┐
      │ Remote: Domain │     │ Remote: Domain │      │ Shared Platform│
      │      A         │     │      B         │      │ UI / Utilities │
      └───────┬────────┘     └────────┬───────┘      └──────┬─────────┘
              │                       │                       │
              └───────────────────────┼───────────────────────┘
                                      │
                         ┌────────────▼─────────────┐
                         │ APIs / SDKs / Services   │
                         └──────────────────────────┘
```

### Architecture principles

1. **Boundaries before abstractions**
2. **Explicit contracts over implicit coupling**
3. **Local ownership over global state**
4. **Shared code only when ownership is clear**
5. **Measure before optimizing**
6. **Automate repetitive engineering work**
7. **Prefer reversible decisions**

---

## 🧰 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827)
![Next.js](https://img.shields.io/badge/Next.js-111827?style=flat-square&logo=nextdotjs)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=111827)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

- React / TypeScript
- Next.js / React Native
- Webpack Module Federation
- Vite
- Design Systems
- Vitest / Jest / Playwright
- CI/CD / GitHub Actions
- Claude Code / Agent Skills / MCP

---

## 🚀 Featured Work

| Project | Focus | Status |
|---|---|---|
| Enterprise Design System | React / TypeScript / DX | Architecture |
| Micro-Frontend Platform | Module Federation | Architecture |
| AI Reviewer Widget | AI code review | Prototype |
| React Performance Lab | Web Vitals | Research |
| React Patterns | Production patterns | Planned |
| Frontend System Design | Architecture case studies | Planned |
| TypeScript Deep Dive | Type-system experiments | Planned |
| Claude Code Toolkit | Agent Skills / workflows | Prototype |
| React Native Video Player | Mobile engineering | Prototype |
| AI Coding Agent | Agentic development | Research |

---

## 🤖 AI Engineering

### Engineering Copilot

```text
Confluence ─┐
Jira ───────┤
GitHub ─────┼──► Unified Retrieval ──► Context Builder ──► Agent
ADRs ───────┤                                      │
RFCs ───────┘                                      ▼
                                          Review / Explain / Act
```

Potential capabilities:

- Requirement → implementation verification
- PR review
- Architecture context retrieval
- ADR lookup
- Jira requirement mapping
- Codebase exploration
- Test generation
- Documentation generation

### AI Reviewer

The AI Reviewer concept validates:

- Requirement coverage
- API contract usage
- React patterns
- TypeScript safety
- Component boundaries
- Performance risks
- Test coverage
- Micro-Frontend boundaries

---

## ⚡ Performance Engineering

I use measurable signals rather than subjective performance claims.

### Primary metrics

- LCP
- INP
- CLS
- FCP
- TTI
- Bundle size
- JavaScript execution time
- Network waterfall
- Cache hit ratio

### Optimization toolbox

- Code splitting
- Lazy loading
- Route-level chunking
- Image optimization
- WebP / AVIF
- Preload / prefetch
- Memoization where justified
- Virtualization
- Dependency analysis
- Rendering profiling

---

## 🧩 Micro-Frontend

### Runtime model

```text
Host
 ├── Authentication
 ├── Routing
 ├── Global shell
 ├── Shared UI
 ├── Remote A
 ├── Remote B
 └── Remote C
```

### Important concerns

- Shared React version
- Shared dependency strategy
- Remote version compatibility
- Runtime failure isolation
- Contract testing
- Deployment independence
- Observability
- Rollback strategy

---

## 🧠 System Design

I approach frontend system design through several layers:

1. **Product requirements** — what must the system accomplish?
2. **Domain boundaries** — which team owns each capability?
3. **Runtime architecture** — how are applications composed?
4. **Data flow** — where does state live?
5. **Reliability** — what happens when a dependency fails?
6. **Performance** — what is the critical rendering path?
7. **Delivery** — how can teams deploy independently?
8. **Observability** — how do we know the system is healthy?

---

## 📊 GitHub Analytics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=namnx-vn&show_icons=true&hide_border=true&theme=transparent&rank_icon=github" alt="GitHub stats">
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=namnx-vn&layout=compact&hide_border=true&theme=transparent" alt="Top languages">
</p>

---

## 📈 Activity Graph

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=namnx-vn&theme=github-compact&hide_border=true" alt="GitHub activity graph">
</p>

---

## 🔥 Streak Stats

<p align="center">
  <img src="https://streak-stats.demolab.com?user=namnx-vn&theme=transparent&hide_border=true" alt="GitHub streak">
</p>

---

## 🏆 GitHub Trophy

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=namnx-vn&theme=flat&no-frame=true&no-bg=true&margin-w=8" alt="GitHub trophies">
</p>

---

## 🐍 Contribution Snake

<p align="center">
  <img src="./assets/github-contribution-grid-snake.svg" alt="Contribution snake">
</p>

---

## 🗓️ Career

```text
Frontend Engineer
      │
      ▼
Senior Frontend Engineer
      │
      ▼
Frontend Architect
      │
      ├── React / TypeScript
      ├── Micro-Frontend
      ├── Design Systems
      ├── Performance
      └── AI Engineering
```

---

## 📚 Learning & Research

Current themes:

- Advanced React architecture
- TypeScript type-level programming
- Frontend system design
- Micro-Frontend architecture
- AI agents
- Agent Skills
- MCP
- RAG
- Developer productivity
- Software architecture

---

## ✍️ Writing

Planned technical topics:

- Designing Micro-Frontend boundaries
- React performance engineering
- TypeScript architecture patterns
- Building an AI code reviewer
- Claude Code Agent Skills
- Frontend system design
- Enterprise Design Systems
- AI-assisted development workflows

---

## 🌍 Open Source

The long-term objective is to publish reusable engineering assets around:

- React
- TypeScript
- Micro-Frontend
- AI developer tooling
- Frontend architecture
- Performance

---

## 🌐 Portfolio

A dedicated Next.js portfolio lives under `/portfolio` and is designed for:

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- SEO
- Open Graph
- Responsive design
- Dark mode
- Projects / timeline / blog / resume / contact

---

## 🎨 Brand System

| Token | Value |
|---|---|
| Ink | `#0B1120` |
| Surface | `#111827` |
| Blue | `#2563EB` |
| Violet | `#7C3AED` |
| Teal | `#14B8A6` |

**Visual direction:** Apple × Vercel × Linear × Anthropic

---

## 🧱 Engineering Principles

### Simplicity
Complexity should be introduced only when it buys meaningful value.

### Ownership
Every abstraction should have an owner.

### Contracts
Interfaces are architecture.

### Observability
If a system cannot be measured, it is difficult to improve.

### Automation
Repeated manual work is a candidate for tooling.

### Documentation
Architecture decisions should be discoverable.

### Evolution
Design for change, not hypothetical perfection.

---

## 📦 Repository Strategy

The profile is designed around a focused set of flagship repositories rather than a large collection of unfinished demos.

1. `enterprise-design-system`
2. `microfrontend-platform`
3. `ai-reviewer-widget`
4. `react-performance-lab`
5. `react-patterns`
6. `frontend-system-design`
7. `typescript-deep-dive`
8. `claude-code-toolkit`
9. `react-native-video-player`
10. `ai-coding-agent`

Each repository should contain:

- Problem statement
- Architecture
- Design decisions
- Trade-offs
- Setup
- Testing strategy
- Performance notes
- Roadmap
- Engineering lessons

---

## ⚙️ Automation

GitHub Actions are included for:

- Contribution Snake
- Metrics
- WakaTime
- README validation
- Portfolio deployment foundation

---

## 📬 Contact

- GitHub: [@namnx-vn](https://github.com/namnx-vn)
- LinkedIn: add your public profile URL
- Email: add your professional email

---

## 💬 Philosophy

> Build systems that make the next engineer faster.

---

## 🔭 Roadmap

- [x] Premium GitHub profile structure
- [x] Brand palette
- [x] SVG banner
- [x] Avatar frame
- [x] GitHub Actions foundation
- [x] Next.js portfolio foundation
- [x] Repository showcase architecture
- [ ] Publish flagship repositories
- [ ] Add real project case studies
- [ ] Add engineering blog
- [ ] Add architecture diagrams
- [ ] Add public resume
- [ ] Deploy portfolio
- [ ] Connect automated metrics
- [ ] Add AI engineering demos

---

## 🧪 Quality Bar

Before publishing a flagship project:

- [ ] README explains the problem
- [ ] Architecture diagram exists
- [ ] Setup works from a clean machine
- [ ] Tests pass
- [ ] CI is green
- [ ] Performance is measured
- [ ] Security assumptions are documented
- [ ] Trade-offs are explained
- [ ] Roadmap is explicit

---

## 🧭 Final Positioning

```text
React Engineer
      +
TypeScript
      +
Micro-Frontend
      +
System Design
      +
Performance
      +
AI Engineering
      =
Frontend Architect
```

---

<p align="center">
  <b>Nguyễn Xuân Nam</b><br>
  Senior Frontend Engineer · Frontend Architect · AI Engineer
</p>

<p align="center"><sub>Designed for engineering depth, not vanity metrics.</sub></p>
