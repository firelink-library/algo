// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/algo',
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: 'Algoritmos e linguagens',
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/firelink-library/algo'
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        {
          label: 'Pensamento computacional',
          autogenerate: { directory: 'pensamento' }, collapsed: true
        },
        {
          label: 'Linguagens e ferramentas',
          autogenerate: { directory: 'linguagens' }, collapsed: true
        },
        {
          label: 'Estruturas de dados',
          autogenerate: { directory: 'estruturas' }, collapsed: true
        },
        {
          label: 'Projeto e análise de algoritmos',
          autogenerate: { directory: 'algoritmos' }, collapsed: true
        },
        {
          label: 'Paradigmas de programação',
          autogenerate: { directory: 'paradigmas' }, collapsed: true
        },
        {
          label: 'Linguagens formais e compiladores',
          autogenerate: { directory: 'compiladores' }, collapsed: true
        },
      ],
    }),
  ],
});
