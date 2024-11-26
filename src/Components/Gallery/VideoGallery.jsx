import { useState, useRef } from 'react'
import video1 from "../../videos/video1.mp4"
import video2 from "../../videos/video2.mp4"
import video3 from "../../videos/video3.mp4"
import video4 from "../../videos/video4.mp4"
import video5 from "../../videos/video5.mp4"

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,

]

export function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const videoRefs = useRef([])

  const handleMouseEnter = (index) => {
    setActiveIndex(index)
    videoRefs.current[index].play()
  }

  const handleMouseLeave = (index) => {
    setActiveIndex(-1)
    videoRefs.current[index].pause()
    videoRefs.current[index].currentTime = 0
  }

  return (
    <section className="py-16  bg-gradient-to-b from-purple-10 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Video Projects</h2>
        <div className="space-y-16">
          {videos.map((src, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="w-1/2">
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={src}
                    loop
                    muted
                    playsInline
                    className="w-full h-[500px]  bg-contain"
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {activeIndex !== index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-pink-700">Project Title {index + 1}</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='bg-pink-700 h-12 w-32 rounded-md'>View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}