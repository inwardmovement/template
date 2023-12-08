const names = []

const fetchData = (async function () {
  const response = await fetch(
    "https://api.github.com/repos/google/material-design-icons/contents/symbols/web",
  )
  const data = await response.json()
  for (const symbol of data) {
    names.push(symbol.name)
  }
  console.log(names)
})()
