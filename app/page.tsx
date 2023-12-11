import Icon from "@/components/Icon"
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Button>NextUI</Button>
      <Button color="primary" className="rounded-md px-3 py-1.5 text-base">
        <Icon name="add" />
        Primary
      </Button>
    </main>
  )
}
