"use client"
import anime from "animejs/lib/anime.es"
import { spring } from "framer-motion"
import { useEffect, useState } from "react"

const Grid = () => {
    const [columns, setColumns] = useState(0)
    const [rows, setRows] = useState(0)
    const [showcase, setShowcase] = useState(true)

    useEffect(() => {
        setColumns(Math.floor(document.body.clientHeight / 50))
        setRows(Math.floor(document.body.clientWidth / 50))
    }, [])

    useEffect(() => {
        anime({
            targets: ".tile",
            easing: "spring(1, 80, 10, 0)",
            backgroundColor: [
                "rgba(0, 0, 0, 0)",
                "rgba(0, 0, 0, 0.3)",
                "rgba(0, 0, 0, 0)"
            ],
            delay: anime.stagger(40, {
                grid: [rows, columns]
            })
        })
        setInterval(() => {
            setShowcase(false)
        }, 3400)
    })

    const Tile = () => {
        return <div className="tile bg-back" />
    }

    const TileNet = () =>
        Array.from(Array(columns * rows)).map((_, index) => (
            <Tile key={`tile-${index}`} />
        ))

    return (Boolean(columns) &&
        <div className={`absolute grid w-full ${showcase ? "z-50" : "-z-[10]"}`} style={{
            height: document.body.clientHeight,
            gridTemplateColumns: `repeat(${rows}, 1fr)`,
            gridTemplateRows: `repeat(${columns}, 1fr)`
        }}>
            <TileNet />
        </div>
    )
}

export default Grid