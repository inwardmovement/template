const fs = require("node:fs")
const names = []

async function generateIconNames() {
  const res = await fetch(
    "https://api.github.com/repos/google/material-design-icons/contents/symbols/web",
  )
  const icons = await res.json()
  for (const icon of icons) {
    names.push(icon.name)
  }

  const dir = __dirname + "/out"
  const content = `// prettier-ignore\nexport const iconNames = ${JSON.stringify(
    names,
  )} as const\n`

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err
  })

  fs.writeFile(dir + "/iconNames.ts", content, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log("\x1b[32m%s\x1b[0m", "✔ Icon names generated\n")
    }
  })
}

generateIconNames()
