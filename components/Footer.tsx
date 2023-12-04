"use client"

import Motion from "./Motion"
import { AiOutlineHeart } from "react-icons/ai"

const Footer = () => {
    const link = "https://github.com/kotiasv/website"
    return (
        <Motion duration={0.3}>
            <div className="mt-20 border-t-[0.1px] dark:border-none dark:bg-[#030303] py-6 px-6 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between">
                <h2 className="flex">
                    With
                    <AiOutlineHeart className="text-red-500 text-3xl mx-1" />
                    by <b className="ml-1">vshakitskiy</b>
                </h2>
                <p className="flex gap-2 text-gray-600 dark:text-gray-400">
                    This website is
                    <a
                        className="text-back dark:text-white cursor-pointer"
                        onClick={() => window.open(link)}
                    >
                        Open Source
                    </a>
                </p>
            </div>
        </Motion>
    )
}

export default Footer
