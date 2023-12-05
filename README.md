```
npm i
npm run dev
```

---

1. `cna` (createNextApp)
2. `cc` (createConfig)
3. `scni` (initShadcnui)
4. remove `lucide-react`
5. replace colors:
   ```
   const colors = require("tailwindcss/colors")
   ...
   theme: {
     colors: {
       transparent: "transparent",
       current: "currentColor",
       black: colors.black,
       white: colors.white,
       green: colors.emerald,
       yellow: colors.amber,
       red: colors.rose,
     },
     ...
   ```
6. `scna` (addShadcnui)

To do:

- `<Icon/>` (Material Symbols SVGs)
- move shadcn dependencies to dev dep?
