/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import logo1 from "../../Images/AT Buzz logo copy.png"
import logo2 from "../../Images/AT Events Logo.png"
import logo3 from "../../Images/AT Travel new 300- 150.png"
import logo4 from "../../Images/AT Fashion.png"
// import logo5 from "../../Images/mcmvLogo.png"


export default function AboutUs() {

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  }
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto  py-12">
        <motion.section
          className=""
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          ref={ref}
        >
          <motion.h1 
            className="text-5xl font-bold mb-8 mt-9 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-white"
            variants={itemVariants}
          >
            About Atraski
          </motion.h1>
          <div className=" mx-auto text-center text-white ">
            <motion.p className="text-lg mb-6 p-7 tracking-widest text-[22px]" variants={itemVariants}>
              At Atraski, we believe in the power of authentic connections and the ability of compelling storytelling to elevate brands. Our team of seasoned professionals brings a wealth of experience and a fresh perspective to every project.
              Whether youre a startup looking to establish your online presence or an established brand seeking a marketing revamp, Atraski is here to tailor solutions that resonate with your audience and drive measurable results.
            </motion.p>
           
            <motion.p className="text-lg p-7 tracking-widest text-[22px]" variants={itemVariants}>
            At Atraski India, we transform brands by bridging creativity with strategy. As a dynamic digital solutions and marketing company, we specialize in crafting personalized campaigns that connect authentically with audiences and yield tangible results. Our team of experts, passionate about the power of storytelling and data-driven insights, approaches each project with fresh ideas and a deep understanding of the market landscape.
            Whether you are launching a startup or reinvigorating an established brand, Atraski India brings a dedicated approach to elevate your business’s online presence. With a focus on innovation, excellence, and results-oriented solutions, we’re here to make your brand memorable in today’s fast-paced digital world. Join us as we help you navigate your brand’s unique journey to success, one impactful story at a time.
            </motion.p>
          
          </div>
        </motion.section>

        <section className='text-white'>
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={itemVariants}
          >
            Our Segments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {segments.map((segment, index) => (
              <SegmentCard key={index} segment={segment} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function SegmentCard({ segment, index }) {
  const [hoveredSegment, setHoveredSegment] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
    >
      <a href={segment.link} passHref>
        <card 
          className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer"
          onMouseEnter={() => setHoveredSegment(true)}
          onMouseLeave={() => setHoveredSegment(false)}
        >
          <cardHeader>
            <cardTitle className="text-center pl-20">{segment.title}</cardTitle>
          </cardHeader>
          <cardContent className="flex-grow flex items-center justify-center">
            <motion.div
              animate={{
                scale: hoveredSegment ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={segment.logo}
                alt={`${segment.title} logo`}
                width={150}
                height={150}
                className="object-contain"
              />
            </motion.div>
          </cardContent>
        </card>
      </a>
    </motion.div>
  )
}

const segments = [
  {
    
    link: "https://digital.atraski.com",
    logo: logo1,
  },
  {
   
    link: "https://creative.atraski.com",
    logo:logo2,
  },
  {
   
    link: "https://consulting.atraski.com",
    logo: logo3,
  },
  {
   
    link: "https://research.atraski.com",
    logo: logo4,
  },
 
]

