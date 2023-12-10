import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
      },
      themes: {
        light: {
          layout: {},
        },
        dark: {
          layout: {},
        },
      },
    }),
  ],
}
export default config
