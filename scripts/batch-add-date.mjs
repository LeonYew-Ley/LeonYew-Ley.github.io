/**
 * Batch-add `date:` to content markdown files missing created/date/published.
 * Sources (priority): existing frontmatter (skip) → filename YYYY-MM-DD → first `> 日期：`
 *   → file mtime (local calendar date, e.g. Windows「修改日期」)
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const CONTENT_DIR = path.join(process.cwd(), "content")
const DRY_RUN = process.argv.includes("--dry-run")

const SKIP_DIR_PARTS = [".obsidian", "99_RES_private", "templates"]
const DATE_KEYS = ["date", "created", "published", "modified", "lastmod"]

function shouldSkipDir(dirPath) {
  return SKIP_DIR_PARTS.some((p) => dirPath.split(path.sep).includes(p))
}

function walkMdFiles(dir, files = []) {
  if (shouldSkipDir(dir)) return files
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const st = fs.statSync(full)
    if (st.isDirectory()) walkMdFiles(full, files)
    else if (name.endsWith(".md")) files.push(full)
  }
  return files
}

function hasDateField(data) {
  for (const key of DATE_KEYS) {
    const v = data[key]
    if (v !== undefined && v !== null && String(v).trim() !== "") return true
  }
  return false
}

function pad2(n) {
  return String(n).padStart(2, "0")
}

function toIso(y, m, d) {
  const iso = `${y}-${pad2(m)}-${pad2(d)}`
  const dt = new Date(`${iso}T12:00:00`)
  if (isNaN(dt.getTime())) return null
  if (dt.getFullYear() !== Number(y) || dt.getMonth() + 1 !== Number(m) || dt.getDate() !== Number(d)) {
    return null
  }
  return iso
}

function parseDateString(raw) {
  if (!raw) return null
  const s = String(raw).trim()

  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (m) return toIso(m[1], m[2], m[3])

  m = s.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日/)
  if (m) return toIso(m[1], m[2], m[3])

  m = s.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/)
  if (m) return toIso(m[1], m[2], m[3])

  return null
}

function dateFromFilename(filePath) {
  const base = path.basename(filePath, ".md")
  const m = base.match(/^(\d{4}-\d{2}-\d{2})/)
  return m ? parseDateString(m[1]) : null
}

function dateFromBlockquote(body) {
  const m = body.match(/^>\s*日期[：:]\s*(.+)$/m)
  if (!m) return null
  return parseDateString(m[1].trim())
}

/** Local calendar date from OS file mtime (Windows 资源管理器「修改日期」). */
function dateFromFilesystem(filePath) {
  const mtime = fs.statSync(filePath).mtime
  return toIso(mtime.getFullYear(), mtime.getMonth() + 1, mtime.getDate())
}

function inferDate(filePath, body) {
  const fromName = dateFromFilename(filePath)
  if (fromName) return { iso: fromName, source: "filename" }
  const fromQuote = dateFromBlockquote(body)
  if (fromQuote) return { iso: fromQuote, source: "blockquote" }
  const fromMtime = dateFromFilesystem(filePath)
  if (fromMtime) return { iso: fromMtime, source: "mtime" }
  return null
}

function writeFileWithDate(filePath, parsed, isoDate) {
  const { data, content } = parsed
  data.date = isoDate
  fs.writeFileSync(filePath, matter.stringify(content, data), "utf8")
}

const results = { updated: [], skippedHasDate: [], skippedNoSource: [], skippedOther: [] }

for (const filePath of walkMdFiles(CONTENT_DIR)) {
  const rel = path.relative(CONTENT_DIR, filePath)
  const raw = fs.readFileSync(filePath, "utf8")

  if (raw.includes("<%")) {
    results.skippedOther.push({ rel, reason: "templater" })
    continue
  }

  const parsed = matter(raw)

  if (hasDateField(parsed.data)) {
    results.skippedHasDate.push(rel)
    continue
  }

  const inferred = inferDate(filePath, parsed.content)
  if (!inferred) {
    results.skippedNoSource.push(rel)
    continue
  }

  const { iso, source } = inferred

  if (DRY_RUN) {
    results.updated.push({ rel, iso, source, hadFm: Object.keys(parsed.data).length > 0 })
    continue
  }

  writeFileWithDate(filePath, parsed, iso)
  results.updated.push({ rel, iso, source, hadFm: Object.keys(parsed.data).length > 0 })
}

console.log(DRY_RUN ? "DRY RUN\n" : "APPLIED\n")
console.log(`Updated: ${results.updated.length}`)
for (const u of results.updated) {
  console.log(`  + ${u.rel} → ${u.iso} [${u.source}]${u.hadFm ? "" : " (new frontmatter)"}`)
}
console.log(`\nAlready had date: ${results.skippedHasDate.length}`)
console.log(`No date source: ${results.skippedNoSource.length}`)
if (results.skippedNoSource.length) {
  for (const r of results.skippedNoSource) console.log(`  ? ${r}`)
}
if (results.skippedOther.length) {
  console.log(`\nSkipped other: ${results.skippedOther.length}`)
  for (const s of results.skippedOther) console.log(`  - ${s.rel}: ${s.reason}`)
}
