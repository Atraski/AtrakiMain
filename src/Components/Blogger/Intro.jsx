

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PageIntro() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()

  // Animations for larger screens
  const videoScale = useTransform(scrollY, [0, 200], [1, 1.5])
  const videoPosition = useTransform(scrollY, [0, 200], ['50%', '0%'])
  const initialHeadingOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const scrolledHeadingOpacity = useTransform(scrollY, [150, 250], [0, 1])
  const scrolledHeadingPosition = useTransform(scrollY, [150, 250], ['20%', '50%'])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[100vh] overflow-hidden bg-black text-white">
      {/* Static version for small screens */}
      <div className="md:hidden h-full flex flex-col justify-center items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center p-4 bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold mb-4">
            THE ONLY SOLUTION
            <br />
            OF INNOVATIVE MARKETING
          </h1>
          <p className="text-lg">
            Experience cutting-edge marketing strategies tailored for your success.
          </p>
        </div>
      </div>

      {/* Animated version for larger screens */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <motion.h1
          className="absolute mt-20 top-10 left-0 right-0 text-center text-5xl font-bold z-10"
          style={{ opacity: initialHeadingOpacity }}
        >
          THE ONLY SOLUTION
          <br />
          OF INNOVATIVE MARKETING
        </motion.h1>

        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          style={{
            scale: videoScale,
            y: videoPosition,
          }}
        >
          <video
            className="w-1/2 rounded h-auto object-cover mt-0"
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.h1
          className="absolute left-0 right-0 text-center text-7xl font-bold z-20"
          style={{
            opacity: scrolledHeadingOpacity,
            top: scrolledHeadingPosition,
          }}
        >
          THE ONLY SOLUTION
          <br />
          OF INNOVATIVE MARKETING
        </motion.h1>
      </div>
    </div>
  )
}