import { cn } from "@/lib/utils"
import * as React from "react"

export default function Icon({
  name,
  className,
  ...props
}: {
  name: string
  className?: string
}) {
  return (
    <span className={cn("material-symbols-rounded", className)} {...props}>
      {name}
    </span>
  )
}
