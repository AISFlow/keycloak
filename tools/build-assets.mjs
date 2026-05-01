#!/usr/bin/env node
/**
 * Build raster brand assets from the SVG source set.
 *
 * Inputs:
 *   src/login/assets/img/auth-logo.svg     — full mark (square 48×48 viewBox)
 *   src/login/assets/img/favicon.svg       — simplified mark for tiny sizes
 *   src/login/assets/img/shape.svg         — decorative geometric pattern
 *   public/aisflow-wordmark.svg            — mark + wordmark (rectangular)
 *
 * Outputs:
 *   assets/<basename>/<width>.png
 *   assets/<basename>/<width>.jpg
 *   assets/<basename>/<width>.avif
 *
 * Sizes (target width in px): 64, 128, 256, 512, 1024.
 * Aspect ratio is preserved per source SVG viewBox.
 *
 *   • PNG  → kept transparent (lossless, full alpha).
 *   • AVIF → kept transparent (modern lossy with alpha; ~30–50 % of PNG).
 *   • JPEG → flattened on white (no alpha) for embedding into platforms
 *            that strip transparency (some social-card renderers, etc.).
 *
 * Add new sources by dropping SVGs into either source dir; the script
 * picks them up by basename.
 */

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const SOURCES = [
	'src/login/assets/img/auth-logo.svg',
	'src/login/assets/img/favicon.svg',
	'src/login/assets/img/shape.svg',
	'public/aisflow-wordmark.svg'
]

const SIZES = [64, 128, 256, 512, 1024]

const FORMATS = [
	{
		ext: 'png',
		encode: (img) => img.png({ compressionLevel: 9, palette: false })
	},
	{
		ext: 'avif',
		encode: (img) => img.avif({ quality: 60, effort: 6 })
	},
	{
		// JPEG can't carry alpha — flatten over white so logos read on
		// any background (notably GitHub's OG-image renderer).
		ext: 'jpg',
		encode: (img) =>
			img
				.flatten({ background: { r: 255, g: 255, b: 255 } })
				.jpeg({ quality: 88, mozjpeg: true })
	}
]

async function buildOne(srcRel) {
	const srcAbs = join(repoRoot, srcRel)
	const name = basename(srcRel, extname(srcRel))
	const outDir = join(repoRoot, 'assets', name)

	await rm(outDir, { recursive: true, force: true })
	await mkdir(outDir, { recursive: true })

	const buf = await readFile(srcAbs)
	console.log(`\n→ ${srcRel}`)

	for (const width of SIZES) {
		// `density` scales the rasterised SVG; keep it generous so small
		// strokes don't ghost on the smallest sizes.
		const density = Math.max(72, Math.ceil((width * 72) / 48))
		const base = sharp(buf, { density }).resize({ width })

		for (const fmt of FORMATS) {
			const out = join(outDir, `${width}.${fmt.ext}`)
			await fmt.encode(base.clone()).toFile(out)
			console.log(
				`   ${width.toString().padStart(4)}.${fmt.ext.padEnd(4)} → ${out.replace(`${repoRoot}/`, '')}`
			)
		}
	}
}

async function writeIndex(sources) {
	const lines = [
		'# AISFlow brand raster assets',
		'',
		'Auto-generated from `src/login/assets/img/*.svg` and',
		'`public/aisflow-wordmark.svg` by `pnpm run build-assets`. Do not',
		'hand-edit; re-run the script and commit the result instead.',
		'',
		`Sizes (target width, px): ${SIZES.join(', ')}.`,
		`Formats: ${FORMATS.map((f) => f.ext).join(', ')} (PNG/AVIF keep alpha; JPEG is flattened on white).`,
		'',
		'## Sources',
		''
	]
	for (const src of sources) {
		const name = basename(src, extname(src))
		lines.push(`- [\`${name}/\`](./${name}/) ← \`${src}\``)
	}
	lines.push('')
	await writeFile(join(repoRoot, 'assets', 'README.md'), lines.join('\n'))
}

async function main() {
	const present = []
	for (const src of SOURCES) {
		try {
			await readFile(join(repoRoot, src))
			present.push(src)
		} catch {
			console.warn(`(skipped — not found) ${src}`)
		}
	}

	for (const src of present) await buildOne(src)
	await writeIndex(present)

	console.log(
		`\n✓ wrote ${present.length} × ${SIZES.length} × ${FORMATS.length} = ${present.length * SIZES.length * FORMATS.length} files`
	)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
