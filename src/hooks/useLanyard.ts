import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import type { LanyardPresence, lanyardWS } from "@/types/lanyard"

export const useLanyard = () => {
  const WS_URL = "wss://api.lanyard.rest/socket"

  const [lanyard, setLanyard] = useState<LanyardPresence | null>(null)
  const { sendJsonMessage, lastJsonMessage } = useWebSocket<lanyardWS>(WS_URL)

  useEffect(() => {
    if (!lastJsonMessage)
      return

    switch (lastJsonMessage.op) {
      case 0: return setLanyard(lastJsonMessage.d)
      case 1: 
        sendJsonMessage({
          op: 2,
          d: {
            subscribe_to_id: "511911643475738656"
          }
        })
        setInterval(() => sendJsonMessage({ 
          op: 3
        }), lastJsonMessage.d.heartbeat_interval)
    }
  }, [lastJsonMessage])

  return { lanyard }
}