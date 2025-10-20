import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

export default defineConfig({
	site: 'https://casparhealth.github.io',
	base: '/auth-integration',
	integrations: [
		starlight({
			title: 'Simple Auth API',
			plugins: [
				starlightOpenAPI([
					{
						base: 'api',
						schema: './openapi.yaml',
					},
				]),
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Setup Guide', slug: 'setup-guide' },
						{ label: 'Cognito Test', slug: 'cognito-test' },
					],
				},
				{
					label: 'Developer Resources',
					items: [
						{ label: 'Developer Guide', slug: 'developer-guide' },
					],
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
