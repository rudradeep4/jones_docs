import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JONES',
			social: {
				github: 'https://github.com/neuro-team-femto',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'start/getstarted' },
						{ label: 'Build & Deploy', slug: 'start/deploy' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Creating an Experiment', slug: 'guides/createxp' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
