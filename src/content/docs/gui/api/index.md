---
title: "GUI Architecture & API Reference"
description: "Frontend components, Tauri Rust IPC bridge, and state management reference."
---

# `fairmorph-gui` Reference

The GUI application is built using **Svelte** for the desktop frontend and **Tauri (Rust)** for native OS interactions.

## Key Subsystems

- **IPC Bridge (`src-tauri`)**: Handles file system reads, native dialogs, and engine execution.
- **Svelte Store Layer**: Manages reactive UI state and observation dataset schemas.

:::note[Auto-Generated Status]
This page is updated automatically when building the documentation portal.
:::
