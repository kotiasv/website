"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

const Motion = ({ children }: { children: ReactNode }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .5 }}
        >
            {children}
        </motion.section>
    )
}

export default Motion