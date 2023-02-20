
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rooselet/Projects/Github/realtimebyte/Potofolio/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/rooselet/Projects/Github/realtimebyte/Potofolio/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/rooselet/Projects/Github/realtimebyte/Potofolio/src/pages/index.tsx"))
}

