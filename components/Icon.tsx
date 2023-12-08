import React from "react"
import { twMerge } from "tailwind-merge"

type IconProps = {
  name: string
  className?: string
  [x: string]: any
}

export default function Icon({ name, className, ...props }: IconProps) {
  return (
    <span className={twMerge("material-symbols-rounded", className)} {...props}>
      {name}
    </span>
  )
}
