import fs from 'fs-extra';
import path from 'path';

const ROOT_DIR = path.resolve();
const GUI_SRC = path.join(ROOT_DIR, 'external/gui');
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/content/docs/gui/api');

async function generateGuiDocs() {
  console.log('⚡ Generating GUI Architecture & Component Docs...');

  if (!await fs.pathExists(GUI_SRC)) {
    console.warn(`⚠️ Warning: GUI source path "${GUI_SRC}" not found. Skipping auto-gen.`);
    return;
  }

  await fs.ensureDir(OUTPUT_DIR);

  const indexContent = `---
title: "GUI Architecture & API Reference"
description: "Frontend components, Tauri Rust IPC bridge, and state management reference."
---

# \`fairmorph-gui\` Reference

The GUI application is built using **Svelte** for the desktop frontend and **Tauri (Rust)** for native OS interactions.

## Key Subsystems

- **IPC Bridge (\`src-tauri\`)**: Handles file system reads, native dialogs, and engine execution.
- **Svelte Store Layer**: Manages reactive UI state and observation dataset schemas.

:::note[Auto-Generated Status]
This page is updated automatically when building the documentation portal.
:::
`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.md'), indexContent, 'utf-8');
  console.log(`✅ Generated GUI API docs -> ${OUTPUT_DIR}/index.md`);
}

generateGuiDocs();