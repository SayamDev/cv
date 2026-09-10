/**
 * Publishes the CV as machine-readable JSON alongside the site.
 *
 * `src/data/cv.ts` is the single source of truth. This writes it to
 * `public/cv.json` before the build, so https://sayamdev.github.io/cv/cv.json
 * is always in step with the page — and anything else that wants my CV data
 * (the GitHub profile README generator, for one) can just fetch it.
 */
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cv } from '../src/data/cv'

const output = {
  $comment: 'Generated from src/data/cv.ts — do not edit by hand.',
  generatedAt: new Date().toISOString().slice(0, 10),
  ...cv,
}

const target = resolve(import.meta.dirname, '../public/cv.json')
writeFileSync(target, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${target}`)
