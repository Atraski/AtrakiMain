import { useState, useRef, useEffect } from 'react'
import img1 from "../../Images/1.jpg"
import img2 from "../../Images/2.jpg"
import img3 from "../../Images/3.jpg"
import img4 from "../../Images/4.jpg"
import img5 from "../../Images/5.jpg"
import img6 from "../../Images/6.jpg"





const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
]

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleScaleEffect = () => {
      const items = container.querySelectorAll('.gallery-item')
      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        )
        const scale = Math.max(0.8, 1 - distance / 1000)
        item.style.transform = `scale(${scale})`
      })
      requestAnimationFrame(handleScaleEffect)
    }

    window.addEventListener('mousemove', handleMouseMove)
    handleScaleEffect()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-purple-10 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Work</h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              {activeIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View Project</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
