import { readFile, writeFile } from 'node:fs/promises';

const file = 'dist/index.html';
const html = await readFile(file, 'utf8');
await writeFile(file, html.replaceAll('href="/_astro/', 'href="./_astro/'), 'utf8');
