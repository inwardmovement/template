```
npm i
npm run dev
```

## To create template from scratch

1. `cna` (createNextApp)
2. `cc` (createConfig)
3. `scni` (initShadcnui)
4. remove `lucide-react`, Next.js boilerplate code and shadcn-ui animations/container in `tailwind.config.ts`

## shadcn-ui

`scna` (addShadcnui) to import shadcn-ui components

## Icons

`app/material-symbols.css`

```
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

:root {
  --font-FILL: 0;
  --font-wght: 400;
  --font-GRAD: 0;
  --font-opsz: 24;
}

.material-symbols-rounded {
  font-variation-settings:
    "FILL" var(--font-FILL),
    "wght" var(--font-wght),
    "GRAD" var(--font-GRAD),
    "opsz" var(--font-opsz);
}
```

`app/layout.tsx`

```
...
import "./material-symbols.css"
...
```

`app/page.tsx`

```
...
<span className="material-symbols-rounded hover:[--font-FILL:1] hover:[--font-wght:600]">
  check_circle
</span>
...
```

## To do

- `<Icon/>`
- wait for a native implementation of Material Symbols
