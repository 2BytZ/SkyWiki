// Static hosts (e.g. Neocities) can't rewrite URLs, so give every route its own index.html.
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const routes = ["wiki/Home", "wiki/Dranleic_Haligdrake", "wiki/Pharis_Ironeye", "wiki/Credits"]
const dist = "dist"
const index = join(dist, "index.html")

for (const route of routes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, "index.html"))
}
copyFileSync(index, join(dist, "404.html"))

// Plain redirects (no app needed) for /wiki and the site root
const redirect = `<!doctype html>
<html><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/wiki/Home">
<link rel="canonical" href="/wiki/Home">
<script>location.replace("/wiki/Home")</script>
<title>Redirecting…</title></head>
<body><a href="/wiki/Home">Go to the home page</a></body></html>
`
writeFileSync(join(dist, "wiki", "index.html"), redirect)
writeFileSync(index, redirect)
console.log(`Created static pages for ${routes.length} routes and 404.html`)
