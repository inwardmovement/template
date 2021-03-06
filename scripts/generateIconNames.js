// generate ./out/iconNames.ts

const fs = require("node:fs")
let names = []

async function generateIconNames() {
  const res = await fetch(
    "https://raw.githubusercontent.com/google/material-design-icons/master/update/current_versions.json",
  )
  const icons = await res.json()

  for (const icon in icons) {
    names.push(icon.replace(/.*::/i, ""))
  }

  names = Array.from(new Set(names.sort())) // remove duplicates + sort

  const dir = __dirname + "/out"

  const content = `export const iconNames = ${JSON.stringify(names)} as const`

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err
  })

  fs.writeFile(dir + "/iconNames.ts", content, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log(
        "\x1b[32m%s\x1b[0m",
        `✔ ${names.length} icon names generated\n`,
      )
    }
  })
}

generateIconNames()
