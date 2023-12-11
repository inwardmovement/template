import { iconNames } from "@/scripts/out/iconNames"
import { twMerge } from "tailwind-merge"

type IconProps = {
  name: (typeof iconNames)[number]
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  return (
    <span className={twMerge("material-symbols-rounded", className)}>
      {name}
    </span>
  )
}
