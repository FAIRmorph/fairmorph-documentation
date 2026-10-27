import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://fairmorph.github.io',
  base: '/fairmorph-documentation/',

  // Modern Astro 7 unified Markdown pipeline configuration
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },

  integrations: [
    starlight({
      title: 'FAIRmorph Documentation',
      customCss: [
        'katex/dist/katex.min.css',
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/fairmorph',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'guide/overview' },
            { label: 'Installation', slug: 'guide/installation' },
          ],
        },
        {
          label: 'Core Engine (Python)',
          items: [
            {
              label: 'Manual & Guides',
              items: [{ autogenerate: { directory: 'engine' } }],
            },
            {
              label: 'API Reference',
              items: [{ autogenerate: { directory: 'engine/api', collapsed: true } }],
            },
          ],
        },
        {
          label: 'Desktop App (Svelte / Tauri)',
          items: [
            {
              label: 'Manual & Guides',
              items: [{ autogenerate: { directory: 'gui' } }],
            },
            {
              label: 'Architecture & Components',
              items: [{ autogenerate: { directory: 'gui/api', collapsed: true } }],
            },
          ],
        },
      ],
    }),
  ],
});