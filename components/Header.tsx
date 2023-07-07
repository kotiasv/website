"use client"

import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { NavItems } from "@/data"

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const [cmd, setCmd] = useState(true)
    const [windowWidth, setWindowWidth] = useState(0)

    const handleChange = () => {
        if (menuState) setMenuState(!menuState)
    }

    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => setCmd(!cmd), 900)
        return () => {
            clearInterval(interval)
        }
    })

    const Navbar = ({ val }: { val: string }) => (<>
        {
            NavItems.map(({ title, href }, index) => (
                <Link
                    href={href}
                    key={`${val}${index}`}
                    onClick={handleChange}
                >
                    <p className="cursor-pointer">{title}</p>
                </Link>
            ))
        }
    </>)

    return (
        <motion.header
            className="fixed top-0 w-[100%] mx-auto border-b-[1px] border-b-[#141414] z-50"
            initial={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .3 }}
        >
            <div className="relative mx-auto py-2 px-6 backdrop-blur-sm max-w-[1200px]">
                <div className="flex items-center justify-between">
                    <p className="text-gray-400 cursor-default w-[30px]">$ <span className={`text-gray-400 ${cmd ? "inline-block" : "hidden"}`}>_</span></p>
                    <nav className="content-center justify-center sm:flex hidden gap-11">
                        <Navbar val="navbar" />
                    </nav>
                    <div className="cursor-pointer">
                        {menuState ? (
                            <IoMdClose
                                size="25px"
                                onClick={() => setMenuState(!menuState)}
                            />
                        ) : (
                            <HiOutlineMenuAlt3
                                size="25px"
                                style={{
                                    WebkitTapHighlightColor: "transparent",

                                }}
                                onClick={() => setMenuState(!menuState)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <motion.div
                className={`fixed top-[55px] w-[200px] bg-[#141414] ${menuState ? "block" : "hidden"} rounded-md rounded-se-none p-3 z-10`}
                style={{
                    right: windowWidth >= 1200
                        ? (windowWidth - 1100) / 2
                        : 50
                }}

                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: .2 }}
            >
                <div className="sm:hidden flex flex-col gap-3">
                    <Navbar val="menu" />
                </div>
                <div className="sm:hidden flex bg-white mx-auto h-[1px] my-3" />
                <div className="mb-2 cursor-default">Themes</div>
                <div className="ml-2 text-[#d2d2d2] cursor-wait">Dark</div>
                <div className="ml-2 text-[#d2d2d2] cursor-wait">Light</div>
            </motion.div>
        </motion.header >
    )
}

export default Header