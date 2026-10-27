#!/usr/bin/env python3
import sys
import inspect
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
ENGINE_SRC = ROOT_DIR / "external" / "engine" / "src"

if str(ENGINE_SRC) not in sys.path:
    sys.path.insert(0, str(ENGINE_SRC))

OUTPUT_DIR = ROOT_DIR / "src" / "content" / "docs" / "engine" / "api"

try:
    import fairmorph_engine
except ModuleNotFoundError:
    print("⚠️ Warning: Could not import 'fairmorph_engine' from {ENGINE_SRC}")
    sys.exit(0)

def generate_engine_docs():
    print("🐍 Generating Python Engine API Docs...")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    index_file = OUTPUT_DIR / "index.md"
    module_doc = inspect.getdoc(fairmorph_engine) or "Core Engine API Reference"

    content = """---
title: "Engine API Reference"
description: "Auto-generated Python API reference for fairmorph-engine"
---

# `fairmorph_engine`

{module_doc}

## Package Metadata

- **Version**: `{getattr(fairmorph_engine, '__version__', '0.0.2')}`
"""
    index_file.write_text(content, encoding="utf-8")
    print("✅ Generated Engine API docs -> {OUTPUT_DIR}/index.md")

if __name__ == "__main__":
    generate_engine_docs()