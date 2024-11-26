import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, PenTool, BarChart, Globe, Mail } from "lucide-react";

const services = [
  { icon: Megaphone, title: 'Atraski', description: 'We are a marketing performance company with the mission to add value to the brands we work with.' },
  { icon: PenTool, title: 'Atraski Event', description: 'We are an event management company with a vision to impact your product launches and conferences.' },
  { icon: BarChart, title: 'Atraski Fashion', description: 'We are a fashion management company providing wider avenues and expanding your brand' },
  { icon: Globe, title: 'Atraski Travels', description: 'We are coming up with a product as AtStay.in to simplify B2C booking for the offbeat stays in India.' },
  { icon: Mail, title: 'AtBuzz', description: 'We provide an integrated solution for influencer marketing needs, with a promise of brand upscaling' },
  { icon: Mail, title: 'My City My Voice', description: 'A dynamic company hosting open mic events for artists to showcase talent and connect with the community.' },
];

export default function WorkPage() {
  const [activeService, setActiveService] = useState(0);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const lastSection = lastSectionRef.current;

      if (lastSection) {
        // eslint-disable-next-line no-unused-vars
        const lastSectionPosition = lastSection.getBoundingClientRect().top + scrollPosition;
      }

      setActiveService(Math.min(Math.floor(scrollPosition / window.innerHeight), services.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-10 to-black text-white w-full">
      <div className="h-80 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center h-92"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-1">We Create</h1>
          <motion.div className="text-4xl md:text-6xl font-bold mb-12 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="inline-block mr-2">Digital</motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="inline-block mr-2">Experiences</motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="inline-block mr-2">That</motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="inline-block">Inspire</motion.span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Explore Our Work
            </button>
          </motion.div>
         
        </motion.div>
      </div>
    
      {/* Services Content */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="h-screen flex items-center justify-center sticky top-0"
            ref={index === services.length - 1 ? lastSectionRef : null}  // Reference to the last section
          >
            <motion.div
              className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: activeService === index ? 1 : 0, x: activeService === index ? 0 : -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-16 h-16 text-purple-400 mb-6 mx-auto md:mx-0" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-400">{service.description}</p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg aspect-video w-[35rem] h-96"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: activeService === index ? 1 : 0, scale: activeService === index ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Placeholder for service-specific content or image */}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
