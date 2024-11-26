import { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import img1 from "../../Images/10.jpg"
import img2 from "../../Images/9.jpg"
import img3 from "../../Images/8.jpg"
import img4 from "../../Images/7.jpg"
import img5 from "../../Images/6.jpg"
import img6 from "../../Images/5.jpg"
// import img7 from "../../Images/4.jpg"

const featuredWork = [
  {
    id: 1,
    title: "Brand Refresh for TechCorp Inc.",
    imageUrl: img1
  },
  {
    id: 2,
    title: "Social Media Campaign for FreshFoods Co.",
    imageUrl: img2
  },
  {
    id: 3,
    title: "Website Redesign for GlobalTravel Ltd.",
    imageUrl:img3
  },
  {
    id: 4,
    title: "Product Launch for InnoGadget",
    imageUrl:img4
  },
  {
    id: 5,
    title: "Digital Marketing Strategy for EcoFriendly",
    imageUrl: img5
  },
  {
    id: 6,
    title: "App UI/UX Design for HealthTech",
    imageUrl:img6
  }
]

export default function WorkSlider() {
  const controls = useAnimation()
  const x = useMotionValue(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const slideImages = async () => {
      const containerWidth = containerRef.current?.offsetWidth || 0
      const contentWidth = featuredWork.length * 420 // 400px image width + 20px gap

      await controls.start({
        x: [-contentWidth / 2, containerWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        },
      })
    }

    slideImages()
  }, [controls])

  return (
    <section className="py-20 bg-gradient-to-br from-black-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-white">Blogger Mela Moments</h2> */}
        <div ref={containerRef} className="relative w-full">
          <motion.div 
            className="flex space-x-5"
            style={{ x }}
            animate={controls}
          >
            {[...featuredWork, ...featuredWork].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg "
                />
                <div className="sr-only">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
