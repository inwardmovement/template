import React from "react"
import { twMerge } from "tailwind-merge"

export default function Icon({
  name,
  className,
  ...props
}: {
  name: string
  className?: string
}) {
  return (
    <span
      className={twMerge("material-symbols-rounded text-red-600", className)}
      {...props}
    >
      {name}
    </span>
  )
}
