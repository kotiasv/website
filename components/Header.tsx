"use client"

import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
import { NavItems } from "@/data"
import { ThemeContext } from "@/hooks/theme"

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const [cmd, setCmd] = useState(true)
    const [windowWidth, setWindowWidth] = useState(0)

    const context = useContext(ThemeContext)
    const setDarkMode = context
        ? context.setDarkMode
        : () => console.error("Theme Hook Error")

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
            className="fixed top-0 w-[100%] mx-auto border-b-[1px] dark:border-b-[#141414] z-50"
            initial={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .5 }}
        >
            <div className="relative mx-auto py-2 px-6 backdrop-blur-sm max-w-[1200px]">
                <div className="flex items-center justify-between">
                    <p className="dark:text-gray-400 cursor-default w-[30px]">$ <span className={`dark:text-gray-400 ${cmd ? "inline-block" : "hidden"}`}>_</span></p>
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
                className={`fixed top-[55px] w-[200px] border-[#0a0a0c] border-[0.1px] dark:border-none bg-[#ffffff] dark:bg-[#141414] ${menuState ? "block" : "hidden"} rounded-md rounded-se-none p-3 z-10`}
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
                <div className="flex flex-col ml-2 gap-1">
                    <div
                        className="flex cursor-pointer items-center gap-2 dark:text-[#d2d2d2]"
                        onClick={() => {
                            setDarkMode(true)
                            handleChange()
                        }}
                    >
                        <MdDarkMode size={25} className="cursor-pointer" />
                        Dark
                    </div>
                    <div
                        className="flex cursor-pointer items-center gap-2 dark:text-[#d2d2d2]"
                        onClick={() => {
                            setDarkMode(false)
                            handleChange()
                        }}
                    >
                        <MdLightMode size={25} className="cursor-pointer" />
                        Light
                    </div>
                </div>
            </motion.div>
        </motion.header >
    )
}

export default Header