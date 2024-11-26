'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnimationSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Start with both words at 0% to be centered on the page
  const leftWordX = useTransform(scrollYProgress, [0, 1], ["13%", "-100%"])
  const rightWordX = useTransform(scrollYProgress, [0, 1], ["-15%", "100%"])

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-yellow-500 text-white flex flex-col items-center justify-center  px-6 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Center-aligned initially */}
        <motion.div
          className="text-9xl sm:text-7xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap mb-8"
          style={{ x: leftWordX }}
        >
          Creative Solution
        </motion.div>
        <motion.div
          className="text-9xl sm:text-7xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap text-right"
          style={{ x: rightWordX }}
        >
          Creative Solution
        </motion.div>
      </div>
    </section>
  )
}
