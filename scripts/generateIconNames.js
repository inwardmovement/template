const fs = require("node:fs")
const { spawn } = require("node:child_process")
const names = []

async function generateIconNames() {
  const res = await fetch(
    "https://raw.githubusercontent.com/google/material-design-icons/master/update/current_versions.json",
  )
  const icons = await res.json()

  for (const icon in icons) {
    names.push(icon.replace(/.*::/i, ""))
  }

  const dir = __dirname + "/out"

  const content = `// prettier-ignore\nexport const iconNames = ${JSON.stringify(
    names,
  )} as const\n`

  const diff = JSON.stringify(names)
    .replaceAll('",', '",\n')
    .replace('["', '[\n"')
    .replace('"]', '"\n]')

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err
  })

  fs.writeFile(dir + "/iconNames.ts", diff, (err) => {
    if (err) {
      console.error(err)
    } else {
      spawn("git", ["diff", ".\\scripts\\out\\iconNames.ts"])
    }
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
