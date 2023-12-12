import { iconNames } from "@/scripts/out/iconNames"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

type IconProps = {
  name: (typeof iconNames)[number]
  className?: string
  textAround?: boolean
}

export default function Icon({ name, className, textAround }: IconProps) {
  return (
    <span className={twMerge("material-symbols-rounded", className)}>
      {name}
    </span>
  )
}
