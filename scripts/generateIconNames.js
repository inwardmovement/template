const fs = require("node:fs")
const names = []

const generateIconNames = async function () {
  const response = await fetch(
    "https://api.github.com/repos/google/material-design-icons/contents/symbols/web",
  )
  const data = await response.json()
  for (const symbol of data) {
    names.push(symbol.name)
  }

  const dir = __dirname + "/out"
  const content = `export const iconNames = ${JSON.stringify(names)} as const`

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
