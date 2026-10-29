import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://www.fairmorph.org',
  base: '/',

  // Modern Astro 7 unified Markdown pipeline configuration
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },

  integrations: [
    starlight({
      title: 'FAIRmorph Ecosystem',
      description: 'Locally transform heterogeneous field observations and media assets into verified, FAIR-compliant datasets through transparent provenance and repeatable curation workflows' , 
      logo: {
        src: '/public/img/logo.png',
        alt: 'FAIRmorph Ecosystem Logo',
        replacesTitle: false,
      },
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
        }
      ],
    }),
  ],
});