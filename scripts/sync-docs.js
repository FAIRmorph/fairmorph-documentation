import fs from 'fs-extra';
import path from 'path';

const SOURCES = {
  gui: path.resolve('external/gui/docs'),
  engine: path.resolve('external/engine/docs'), // <-- Ensure this is present
};

const TARGET_BASE = path.resolve('src/content/docs');

async function syncFAIRmorphDocs() {
  console.log('🔄 Syncing Markdown documentation...');

  for (const [key, sourceDir] of Object.entries(SOURCES)) {
    const targetDir = path.join(TARGET_BASE, key);
    const categoryName = key === 'engine' ? 'Engine Manual Docs' : 'GUI (Svelte/Tauri)';

    try {
      if (!(await fs.pathExists(sourceDir))) {
        console.warn(`⚠️ [Sync Warning] Source folder "${sourceDir}" not found. Skipping ${key}.`);
        continue;
      }

      // Do NOT clear the whole targetDir if gen-python writes to a subfolder like targetDir/api
      await fs.ensureDir(targetDir);
      await fs.copy(sourceDir, targetDir);

      console.log(`✅ Synced ${categoryName} -> src/content/docs/${key}`);
    } catch (error) {
      console.error(`❌ Error syncing ${key}:`, error);
    }
  }
}

syncFAIRmorphDocs();