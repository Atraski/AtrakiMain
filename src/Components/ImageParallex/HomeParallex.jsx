/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function BackgroundSection({ bgImage, isActive }) {
  return (
    <motion.div
      className="relative h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-scroll-section
    />
  );
}

export default function BackgroundScroll() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const scrollRef = useRef(null);

  const backgroundImages = [
    'http://localhost:5000/static/media/2.5b0652750c6b26a925f4.jpg',
    // Add more images as needed
  ];

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      locoScroll.destroy();
    };
  }, []);

  return (
    <div className="relative w-full" ref={scrollRef} data-scroll-container>
      {backgroundImages.map((bgImage, index) => (
        <BackgroundSection
          key={index}
          bgImage={bgImage}
          isActive={activeSection === index}
          ref={(el) => (sectionRefs.current[index] = el)}
        />
      ))}
      <div className="h-[900vh]" aria-hidden="true" />
    </div>
  );
}
