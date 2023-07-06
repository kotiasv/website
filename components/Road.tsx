"use client"

import { motion } from "framer-motion"

const Road = () => {
    return (
        <motion.section
            className="mt-28"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .3 }}
            viewport={{ once: true }}
            id="about"
        >
            <h2 className="text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#8399c0] to-[#161923] h-16">
                My Path
            </h2>
            {/* SECTION TO REMOVE WHEN I'M READY */}
            <div className="flex justify-center gap-3 sm:gap-7 items-center">
                <p className="sm:text-[45px] text-2xl font-bold sm:font-normal">My journey's just begun..</p>
                <div className="relative w-20 h-[627px] mt-[-5px]">
                    <div className="absolute bg-gradient-to-b from-[#0a0a0c] to-white w-1 rounded-xl h-[300px] left-[25px]" />
                    <div className="absolute top-[290px] left-[3px] bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                        <p className="text-[#0a0a0c] text-[35px]" style={{
                            fontFamily: "Consolas"
                        }}>0</p>
                    </div>
                    <div className="absolute top-[330px] left-[25px] bg-gradient-to-t from-[#0a0a0c] to-white w-1 rounded-xl h-[300px]" />
                </div>
            </div>
        </motion.section>
    )
}

export default Road