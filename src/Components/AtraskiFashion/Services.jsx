import { useState, useEffect } from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const services = [
  { title: 'Fashion Photography', description: 'Capture the essence of your brand with our professional photography services.' },
  { title: 'Model Management', description: 'We represent and manage top talent in the fashion industry.' },
  { title: 'Trend Forecasting', description: 'Stay ahead of the curve with our expert trend analysis and predictions.' },
  { title: 'Styling Services', description: 'Our expert stylists will help create unforgettable looks for any occasion.' },
  { title: 'Fashion Design', description: 'From concept to creation, we bring your fashion ideas to life.' },
  { title: 'Brand Consulting', description: 'Build and strengthen your fashion brand with our strategic consulting.' },
]

const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-purple-10 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div 
                className="h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-500 text-center">{service.title}</h3>
              </motion.div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base text-gray-600 text-center mt-4"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {windowSize.width > 0 && windowSize.height > 0 && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                y: [0, windowSize.height],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))} */}
        </motion.div>
      )}
    </motion.div>
  )
}
