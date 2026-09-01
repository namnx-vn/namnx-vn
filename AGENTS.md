# AGENTS.md

## Purpose

This repository is the public GitHub profile for `namnx-vn`. Treat it as a polished engineering portfolio, not as a generic application repository.

## Required workflow

1. Read this file before making any repository change.
2. Read `README.md` and relevant files under `.github/workflows`, `assets`, `docs`, `portfolio`, or `showcase` before editing them.
3. Preserve the profile repository behavior: GitHub renders the root `README.md` on the user profile.
4. Prefer small, reviewable changes on a dedicated branch and open a pull request unless the user explicitly asks for direct commits.
5. Do not add dependencies, package managers, frameworks, or build systems at repository root unless there is a concrete executable requirement.

## Repository contract

### Root

- `README.md`: primary profile surface and highest-priority artifact.
- `AGENTS.md`: agent operating contract.
- `assets/`: committed visual assets used by the profile.
- `.github/workflows/`: profile automation only.
- `docs/`: supporting documentation.
- `portfolio/` and `showcase/`: supporting portfolio material; keep them secondary to the root profile.

### README principles

- Lead with positioning, proof of work, and flagship projects.
- Keep claims specific and defensible; avoid inflated metrics or unverifiable statements.
- Prefer concise sections with strong information density over long encyclopedic content.
- Keep important content visible before analytics/decorative widgets.
- External cards, SVGs, and badges are optional enhancements; core information must remain understandable if they fail to load.
- Keep links intentional and verify repository names before adding them.
- Use accessible alt text for images.

### Automation principles

- The default branch is `master`; branch filters must match it unless the repository default branch changes.
- Workflows must use least-privilege permissions.
- Pin stable major versions of GitHub Actions where practical; avoid unnecessary `latest` references.
- Do not assume Node.js, npm, or another runtime exists at repository root unless its manifest exists.
- Profile validation should verify Markdown/content/assets without introducing a fake application build.
- Generated assets must have deterministic output paths referenced by `README.md`.

## Quality gates

Before completing a change, verify as applicable:

- Root README exists and is non-empty.
- Referenced local assets exist.
- Workflow YAML is internally consistent with the `master` default branch.
- No root workflow invokes missing package manifests/scripts.
- No `.DS_Store` or other OS/editor artifacts are intentionally added.
- Navigation anchors and key repository links remain valid.
- Changes improve signal-to-noise rather than only adding visual decoration.

## Commit style

Use Conventional Commits when practical:

- `feat(profile): ...`
- `fix(ci): ...`
- `docs(profile): ...`
- `chore(profile): ...`

Keep commits cohesive and reviewable.
