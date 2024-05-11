import { useLanyard } from "@/hooks/useLanyard"

const App = () => {
  const { lanyard } = useLanyard()

  return (
    <main className="container mx-auto">
      {lanyard && <img src={`https://api.lanyard.rest/${lanyard?.discord_user?.id}.jpg`} />}
    </main>
  )
}

export default App