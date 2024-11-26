'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./home.css"

export default function HomeAnimate() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["Experiences", "Brands", "Creators", "Interfaces", "Products"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    
      <main className=" homeAnimate container mx-auto px-4 pt-16 sm:pt-24 md:pt-32 h-60" style={{minHeight: "0vh"}}>
        <div className="flex flex-col gap-4 bg-pink-700 p-6 sm:p-8 md:p-10 rounded-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white">
              We Create
            </h1>
          </motion.div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div 
              className="hidden md:block w-20 h-20 lg:w-24 lg:h-24 rounded-md bg-amber-200 shrink-0" 
              aria-hidden="true"
            ></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white">
                  {words[currentWordIndex]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
   
  )
}