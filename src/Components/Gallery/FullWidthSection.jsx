import { useRef, useEffect } from 'react'

export default function FullWidthImageSection() {
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        // Adjust the speed of the parallax effect
        const scrollSpeed = 0.3
        imageRef.current.style.transform = `translateY(${window.scrollY * scrollSpeed}px)`
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="h-screen w-full overflow-hidden relative">
      <div className="relative h-full w-full">
        <img
          ref={imageRef}
          src="https://localmedia.org/wp-content/uploads/2021/06/events-1.png"
          alt="Full width marketing image"
          className="transform scale-110 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl px-20 py-6 rounded-sm md:text-8xl font-bold  text-white text-center mb-24">
            {/* Add your heading text here if needed */}
            Atraski Gallery
          </h1>
        </div>
      </div>
    </section>
  )
}
