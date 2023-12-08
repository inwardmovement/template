import { twMerge } from "tailwind-merge"

export default function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <span className={twMerge("material-symbols-rounded", className)}>
      {name}
    </span>
  )
}
