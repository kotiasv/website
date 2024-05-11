import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App.tsx"
import "@/index.css"
import Intro from "@/components/Intro.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Intro />
    <App />
  </React.StrictMode>,
)
