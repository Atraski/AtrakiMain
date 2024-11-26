/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion,} from 'framer-motion';
import ImageGallery from '../Gallery/ImageGallery';

import { ArrowRight, Calendar, Tag, Globe } from 'lucide-react';

const events = [
  {
    id: 1,
    name: "TechCon 2023",
    type: "Conference",
    segment: "Technology",
    image: "https://www.jobskills.org/wp-content/uploads/2023/08/Untitled-design-18.jpg",
    secondImage: "https://images.squarespace-cdn.com/content/v1/55a4279ce4b0543aa4ee89c5/1546991626693-XGARZRR5OC87H2WRX69C/40205741_10155933318971553_8900703427512762368_o.jpg?format=1500w",
    url: "https://techcon2023.com",
    description: [
      "Immerse yourself in cutting-edge tech innovations",
      "Network with visionary industry leaders and pioneers",
      "Experience hands-on workshops and mind-blowing demos",
      "Discover the future of AI, robotics, and quantum computing",
      "Engage in thought-provoking panel discussions on tech ethics",
    ],
  },
  {
    id: 2,
    name: "Green Earth Expo",
    type: "Exhibition",
    segment: "Environment",
    image: "https://www.jobskills.org/wp-content/uploads/2023/08/Untitled-design-18.jpg",
    secondImage: "https://images.squarespace-cdn.com/content/v1/55a4279ce4b0543aa4ee89c5/1546991626693-XGARZRR5OC87H2WRX69C/40205741_10155933318971553_8900703427512762368_o.jpg?format=1500w",
    url: "https://greenearthexpo.org",
    description: [
      "Explore groundbreaking sustainable solutions",
      "Witness the launch of revolutionary eco-friendly products",
      "Participate in critical environmental policy discussions",
      "Learn about innovative renewable energy technologies",
      "Connect with passionate environmental advocates and changemakers",
    ],
  },
  // Additional event objects as needed
];

function EventImage({ event }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-64 overflow-hidden rounded-lg shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        key="firstImage"
        src={event.image}
        alt={event.name}
        className="w-full h-80 object-cover absolute top-0 left-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.img
        key="secondImage"
        src={event.secondImage}
        alt={`${event.name} highlight`}
        className="w-full  h-80 object-cover absolute top-0 left-0"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : '100%' 
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-10 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          Our Spectacular Events
        </h1>
        <div className="space-y-32">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="w-full md:w-1/2 perspective"
              >
                <EventImage event={event} />
              </motion.div>
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: (index * 0.2) + 0.4 }}
              >
                <h2 className="text-4xl font-bold text-purple-300">{event.name}</h2>
                <div className="flex items-center space-x-4 text-purple-200">
                  <Calendar className="h-5 w-5" />
                  <p className="text-xl">{event.type}</p>
                </div>
                <div className="flex items-center space-x-4 text-purple-200">
                  <Tag className="h-5 w-5" />
                  <p className="text-lg">Segment: {event.segment}</p>
                </div>
                <div className="space-y-2">
                  {event.description.map((line, lineIndex) => (
                    <motion.p
                      key={lineIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: lineIndex * 0.2 }}
                      className="text-lg text-purple-100 font-sans font-semibold tracking-wide leading-relaxed"
                    >
                      • {line}
                    </motion.p>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-gradient-to-r from-yellow-400 to-red-600 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    View More
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <ImageGallery></ImageGallery>
      </motion.div>
    </div>
  );
}
