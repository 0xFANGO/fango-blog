// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://0xfango.github.io/fango-blog',
	base: '/fango-blog',
	integrations: [mdx(), sitemap()],
});
