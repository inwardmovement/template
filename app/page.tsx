import Icon from "@/components/Icon"
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="flex gap-1">
        <Button>NextUI</Button>
        <Button color="primary" className="rounded-md px-3 py-1.5 text-base">
          Bootstrap
        </Button>
        <Button
          color="primary"
          className="gap-0 rounded-none px-3 py-1.5 text-base"
        >
          <Icon name="add" className="" textAround />
          Ajouter
        </Button>
      </div>
    </main>
  )
}
