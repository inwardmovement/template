import { mkdir, writeFile } from "node:fs"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))
const names = []

const generateIconNames = async function () {
  const res = await fetch(
    "https://api.github.com/repos/google/material-design-icons/contents/symbols/web",
  )
  const data = await res.json()
  for (const symbol of data) {
    names.push(symbol.name)
  }

  const dir = __dirname + "./out"
  const content = `// prettier-ignore\nexport const iconNames = ${JSON.stringify(
    names,
  )} as const\n`

  mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err
  })

  writeFile(dir + "/iconNames.ts", content, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log("\x1b[32m%s\x1b[0m", "✔ Icon names generated\n")
    }
  })
}

generateIconNames()
