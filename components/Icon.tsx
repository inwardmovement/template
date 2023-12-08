import React from "react"

export default function Icon({
  name,
  className,
  ...props
}: {
  name: string
  className?: string
}) {
  return (
    <span className="material-symbols-rounded text-red-600 hover:text-3xl hover:text-green-600 hover:[--font-FILL:1] hover:[--font-wght:600]">
      {name}
    </span>
  )
}
