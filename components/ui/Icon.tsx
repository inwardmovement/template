import { twMerge } from "tailwind-merge"
import { iconNames } from "@/scripts/out/iconNames"

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
