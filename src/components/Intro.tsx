import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useState } from "react"

const Intro = () => {
  const [hide, setHide] = useState<boolean>(false)
  
  useGSAP(() => {
    gsap.to(".banner", {
      y: window.innerHeight,
      stagger: 0.2,
      duration: 1,
      delay: 0.8
    })
  })
  
  useEffect(() => {
    setTimeout(() => setHide(true), 2000)  
  })

  return (
    <section className={`fixed h-screen w-screen${hide ? " hidden" : ""}`}>
      <div className="h-full fixed w-1/4 left-0 bg-foreground banner" />
      <div className="h-full fixed w-1/4 left-1/4 bg-foreground banner" />
      <div className="h-full fixed w-1/4 left-2/4 bg-foreground banner" /> 
      <div className="h-full fixed w-1/4 left-3/4 bg-foreground banner" /> 
    </section>
  )
}

export default Intro