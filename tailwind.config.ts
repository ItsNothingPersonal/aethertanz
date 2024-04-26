import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import tailwindtypography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr'
			},
			gridTemplateColumns: {
				layout: 'auto 2fr'
			}
		}
	},
	plugins: [
		tailwindtypography,
		forms,
		skeleton({
			themes: { preset: [{ name: 'vintage', enhancements: true }] }
		})
	]
} satisfies Config;

export default config;
