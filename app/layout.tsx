import type { Metadata } from "next"
import { Providers } from "./providers"
import "./globals.css"
import "./material-symbols.css"

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
