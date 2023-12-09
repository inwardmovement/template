import { iconNames } from "@/scripts/out/iconNames"
import React from "react"
import { twMerge } from "tailwind-merge"

type IconProps = {
  name: (typeof iconNames)[number]
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
