/* eslint-disable react/no-unknown-property */
'use client'
import img1 from "../../Images/mcmv1.jpg"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"


export default function TextSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-yellow-500 text-white">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-2xl aspect-square">
            <img
              src={img1}
              alt="Decorative image"
              layout="fill"
              objectFit="cover"
              className="rounded-sm shadow-lg"
            />
          </div>
        </div>
        <motion.div 
          style={{ opacity: textOpacity }} 
          className="w-full lg:w-1/2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          <div className="mb-4">Helping brands to stand out</div>
          <div className="mb-4">in the digital era through a</div>
          <div className="mb-4">human centered design</div>
          <div className="mb-4">approach to turn ideas into</div>
          <div className="mb-4">interactive experiences.</div>
        </motion.div>
      </div>
    </section>
  )
}