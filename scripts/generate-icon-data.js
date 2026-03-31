const fs = require('fs');
const path = require('path');

// All icons used across the site, grouped by collection
const NEEDED_ICONS = {
	heroicons: [
		'arrow-top-right-on-square', 'arrows-right-left', 'arrow-trending-down',
		'briefcase', 'chevron-down', 'code-bracket', 'computer-desktop',
		'document-arrow-down', 'envelope', 'identification', 'map-pin',
		'moon-solid', 'phone', 'server-stack', 'sparkles', 'sun-solid',
		'user', 'user-group', 'wrench-screwdriver',
	],
	mdi: [
		'account-group', 'account-multiple', 'code-braces', 'github',
		'source-fork', 'source-repository', 'star',
	],
	'simple-icons': ['github', 'kaggle', 'linkedin', 'x'],
	logos: [
		'angular-icon', 'apple-app-store', 'aws', 'c-sharp', 'docker-icon',
		'dotnet', 'go', 'google-cloud', 'google-play-icon', 'graphql', 'java',
		'javascript', 'kubernetes', 'laravel', 'mongodb', 'mysql', 'nestjs',
		'netlify', 'nextjs-icon', 'nodejs-icon', 'postgresql', 'python', 'react',
		'tailwindcss-icon', 'typescript-icon', 'vue',
	],
};

function extractSubset(data, needed) {
	const subset = {
		prefix: data.prefix,
		icons: {},
	};
	if (data.width) subset.width = data.width;
	if (data.height) subset.height = data.height;

	for (const name of needed) {
		if (data.icons[name]) {
			subset.icons[name] = data.icons[name];
		} else if (data.aliases && data.aliases[name]) {
			if (!subset.aliases) subset.aliases = {};
			subset.aliases[name] = data.aliases[name];
			// Include the parent icon referenced by the alias
			const parent = data.aliases[name].parent;
			if (data.icons[parent]) {
				subset.icons[parent] = data.icons[parent];
			}
		} else {
			console.warn(`  Warning: icon "${data.prefix}:${name}" not found`);
		}
	}

	return subset;
}

function generateIconData() {
	console.log('Extracting icon subsets...');
	const collections = [];

	for (const [pkg, needed] of Object.entries(NEEDED_ICONS)) {
		const jsonPath = require.resolve(`@iconify-json/${pkg}/icons.json`);
		const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
		const subset = extractSubset(data, needed);
		const iconCount = Object.keys(subset.icons).length + Object.keys(subset.aliases || {}).length;
		console.log(`  ${pkg}: ${iconCount} icons (${JSON.stringify(subset).length} bytes)`);
		collections.push(subset);
	}

	const output = JSON.stringify(collections);
	const outputPath = path.join(__dirname, '..', 'app', 'icon-data.json');
	fs.writeFileSync(outputPath, output);
	console.log(`✓ Icon data generated: ${(output.length / 1024).toFixed(1)} KB → app/icon-data.json`);
}

generateIconData();
