/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import img1 from "../../Images/7.jpg"
import img2 from "../../Images/9.jpg"
import img3 from "../../Images/10.jpg"

export default function HomeProjects({ scrollInstance }) {
  const containerRef = useRef(null)
  const [currentProject, setCurrentProject] = useState(0)

  const scrollYProgress = useMotionValue(0)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  const projects = [
    { id: 1, image: img1,  },
    { id: 2, image: img3,  },
    { id: 3, image: img2,  },
  ]

  useEffect(() => {
    if (!scrollInstance) return

    const handleScroll = (e) => {
      const scrollPosition = e.scroll.y
      const containerHeight = containerRef.current.clientHeight
      const projectHeight = containerHeight / projects.length
      const currentIndex = Math.floor(scrollPosition / projectHeight)
      setCurrentProject(Math.min(currentIndex, projects.length - 1))

      scrollYProgress.set(scrollPosition / containerHeight)
    }

    scrollInstance.on('scroll', handleScroll)

    return () => {
      scrollInstance.off('scroll', handleScroll)
    }
  }, [scrollInstance, projects.length, scrollYProgress])

  return (
    <div ref={containerRef} className="relative" style={{ height: `${100 * projects.length}vh` }}>
      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          project={project}
          index={index}
          totalProjects={projects.length}
          isActive={index === currentProject}
          opacity={opacity}
        />
      ))}
    </div>
  )
}

function ProjectSection({ project, index, totalProjects, opacity }) {
  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ opacity }}
    >
      <div className="relative h-full w-full bg-black">
        <img
          src={project.image}
          alt={`Project ${index + 1}`}
          className="absolute inset-0 w-full object-cover opacity-70 h-full"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="hidden sm:flex absolute inset-0 flex-col justify-center p-8 md:p-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-sm font-light text-white/70">
                {project.subtitle}
              </div>
              <h2 className="whitespace-pre-line font-serif text-5xl md:text-7xl font-light tracking-wide text-white">
                {project.title}
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 top-4 sm:right-8 sm:top-8 md:right-16 md:top-16 text-base sm:text-xl text-white">
          {index + 1} / {totalProjects}
        </div>
      </div>
    </motion.div>
  )
}