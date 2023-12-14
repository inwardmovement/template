import { iconNames } from "@/scripts/out/iconNames"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

type IconProps = {
  // children: (typeof iconNames)[number]
  children: string
  className?: string
  textAround?: boolean
}

export default function Icon({ children, className, textAround }: IconProps) {
  return (
    <span className={twMerge("material-symbols-rounded", className)}>
      {children}
    </span>
  )
}
