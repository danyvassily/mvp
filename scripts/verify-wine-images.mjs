#!/usr/bin/env node
// Verify that each wine has a valid image path under /public and
// suggest the best match based on the wine name.

import fs from "fs"
import path from "path"

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, "public")
const DATA_FILE = path.join(ROOT, "lib", "wines-data.ts")

const exts = [".png", ".jpg", ".jpeg", ".webp", ".avif"]

function slugify(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

function listPublicImages(dir = PUBLIC_DIR) {
  /** @type {string[]} */
  const files = []
  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name)
      if (entry.isDirectory()) walk(p)
      else if (/\.(png|jpe?g|webp|avif)$/i.test(entry.name)) {
        files.push("/" + path.relative(PUBLIC_DIR, p).split(path.sep).join("/"))
      }
    }
  }
  walk(dir)
  return files
}

function parseWinesData(fileText) {
  const items = []
  const idRegex = /\bid:\s*"([^"]+)"/g
  let m
  const indices = []
  while ((m = idRegex.exec(fileText))) {
    indices.push({ id: m[1], index: m.index })
  }
  for (let i = 0; i < indices.length; i++) {
    const start = indices[i].index
    const end = i + 1 < indices.length ? indices[i + 1].index : fileText.length
    const slice = fileText.slice(start, end)
    const nameMatch = slice.match(/\bname:\s*"([^"]+)"/)
    const imageMatch = slice.match(/\bimage:\s*"([^"]+)"/)
    items.push({ id: indices[i].id, name: nameMatch?.[1] || "", image: imageMatch?.[1] || "" })
  }
  return items
}

function findBestImage(nameSlug, publicImages) {
  // Try exact canonical names first
  for (const ext of exts) {
    const p = `/wine-${nameSlug}${ext}`
    if (publicImages.includes(p)) return p
  }
  // Try any image that includes the slug
  const contains = publicImages.filter((p) => p.includes(nameSlug))
  if (contains.length) return contains.sort((a, b) => a.length - b.length)[0]
  return null
}

function main() {
  const publicImages = listPublicImages()
  const text = fs.readFileSync(DATA_FILE, "utf8")
  const wines = parseWinesData(text)

  const report = []
  for (const w of wines) {
    const exists = w.image && publicImages.includes(w.image)
    const slug = slugify(w.name)
    const best = findBestImage(slug, publicImages)
    const nameInPath = w.image ? w.image.toLowerCase().includes(slug) : false
    const mismatch = exists && !nameInPath && best && best !== w.image
    report.push({ id: w.id, name: w.name, image: w.image, exists, suggested: exists ? null : best, mismatch, slug })
  }

  const missing = report.filter((r) => !r.exists)
  const mismatches = report.filter((r) => r.mismatch)
  console.log(`Total wines: ${report.length}`)
  console.log(`Missing/invalid images: ${missing.length}`)
  console.log(`Suspected mismatches (name vs file): ${mismatches.length}`)
  if (missing.length) {
    console.log("\nSuggestions:")
    for (const r of missing) {
      console.log(`- ${r.name} (${r.id})\n  current: ${r.image}\n  suggested: ${r.suggested || "<none found>"}`)
    }
  } else {
    console.log("All wine images resolve to files in /public.")
  }

  if (mismatches.length) {
    console.log("\nPotential mismatches:")
    for (const r of mismatches) {
      const best = findBestImage(r.slug, publicImages)
      console.log(`- ${r.name} (${r.id})\n  current: ${r.image}\n  better match: ${best}`)
    }
  }
}

main()
