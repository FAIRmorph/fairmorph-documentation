<div align="center">

# FAIRmorph Documentation Portal

**Docs-as-Code Infrastructure & Technical Specifications for the FAIRmorph Ecosystem**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)
[![Astro Starlight](https://img.shields.io/badge/Astro-Starlight-FF5D01?logo=astro&logoColor=white)](https://starlight.astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-24%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Deploy Status](https://github.com/FAIRmorph/fairmorph-documentation/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/FAIRmorph/fairmorph-documentation/actions)

</div>

---

## 📌 Overview

This repository contains the source code, Astro Starlight configuration, and automation scripts for the official **[FAIRmorph Documentation Portal](https://fairmorph.github.io/fairmorph-documentation/)**. 

Operating as an automated **Docs-as-Code** hub, it pulls manual guides and docstring specifications directly from the core ecosystem submodules (`fairmorph-engine` and `fairmorph-app`), compiling them into a single, high-performance static website.

> 🔒 **Single Source of Truth:** High-level architectural guides, scientific data value pillars, and API specifications are maintained continuously alongside the codebase to ensure complete consistency across releases.

---

## 🏗️ Ecosystem Architecture & Submodules

The documentation pipeline aggregates content across multiple repositories using Git submodules:

```text
fairmorph-documentation/
├── .github/workflows/       <-- Deploy to GitHub Pages (Node 24 / Python 3.11)
├── external/                <-- Linked Submodules
│   ├── engine/              <-- fairmorph-engine (Python domain logic)
│   └── app/                 <-- fairmorph-app (Tauri / Rust / Svelte GUI)
├── scripts/
│   ├── sync-docs.js         <-- Ingests manual markdown & formats frontmatter
│   ├── gen-engine-docs.py   <-- Extracts Python docstrings into API references
│   └── gen-gui-docs.js      <-- Compiles app architecture & IPC specifications
├── src/content/docs/        <-- Astro Starlight content tree
│   ├── index.mdx            <-- Portal landing page (6 Core Pillars)
│   ├── guide/               <-- Architectural overview, installation, workflows
│   ├── engine/              <-- Synced engine documentation & API docs
│   └── app/                 <-- Synced desktop app guides & specifications
└── astro.config.mjs         <-- Starlight theme, sidebar, & plugin setup
```

---

## ✨ Key Infrastructure Features

- 📚 **Unified Knowledge Base:** Combines high-level domain guides (OBIS/GBIF standards, QGIS integration, EXIF binding, transparent provenance) with deep technical references.
- 🔄 **Automated Submodule Synchronization:** Scripts extract and normalize Markdown files directly from source repositories (`external/engine` and `external/app`).
- 🧮 **LaTeX & Mathematical Notation Support:** Native rendering for scientific formulas and mathematical models using `remark-math` and `rehype-katex`.
- ⚡ **Automated GitHub Pages Deployment:** Continuous deployment triggered on `main` branch pushes or cross-repository updates (`code-updated` dispatches).

---

## 🛠️ Local Development & Build Workflow

### Prerequisites

- **Node.js**: `v24+`
- **Python**: `v3.11+`
- **Git**: Installed with submodule support

### Setup & Launch

```bash
# 1. Clone repository with submodules
git clone --recurse-submodules https://github.com/FAIRmorph/fairmorph-documentation.git
cd fairmorph-documentation

# 2. Install Node dependencies
npm install

# 3. Prepare Python environment for API doc generation
pip install -e ./external/engine pydoc-markdown

# 4. Prepare content & start local preview server
npm run dev
```

Open your browser at `http://localhost:4321/fairmorph-documentation/`.

---

## ⚙️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Executes `npm run prepare-docs` and launches local Starlight dev server. |
| `npm run build` | Prepares docs and compiles production static site output to `./dist`. |
| `npm run prepare-docs` | Runs sync and doc-generation scripts sequentially (`sync`, `gen-engine`, `gen-gui`). |
| `npm run sync` | Copies raw Markdown from submodules into Starlight, auto-injecting YAML headers. |
| `npm run gen-engine` | Extracts Python docstrings from `fairmorph-engine` into Starlight Markdown. |
| `npm run preview` | Previews the compiled production build locally. |

---

## 🔗 Related Ecosystem Repositories

- **[fairmorph-engine](https://github.com/FAIRmorph/fairmorph-engine):** Core Python domain validation, EXIF binding, change audit logging, and packaging engine.
- **[fairmorph-app](https://github.com/FAIRmorph/fairmorph-app):** Local-first desktop user interface built with Tauri, Rust, and Svelte.

---

## 📄 License

This documentation portal is licensed under the [MIT License](LICENSE). Individual submodules in `external/` are governed by their respective repository licenses.