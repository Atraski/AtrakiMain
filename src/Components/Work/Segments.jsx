/* eslint-disable react/prop-types */
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import img2 from "../../Images/Atraski fashion.jpg"
import img3 from "../../Images/Atraski Events.jpg"
import img4 from "../../Images/Atraski India.jpg"
import img5 from "../../Images/MCMV.jpg"
import img6 from "../../Images/At Stay.jpg"
import img7 from "../../Images/AT Buzz.jpg"



// Define the useMediaQuery hook within the same file
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const segments = [
  {
    title: "Atraski Inspire India",
    description: "Fundamentally, we will always be a services-first company that ensures our clients' businesses fit their definition of success.",
    imageUrl: img4,
  },
  {
    title: "Atraski Events",
    description: "We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility and results to our clients.",
    imageUrl: img3,
  },
  {
    title: "Atraski Fashion",
    description: "We create path-breaking work that challenges the status quo and positively impacts our clients' businesses.",
    imageUrl: img2,
  },
  {
    title: "My City My Voice",
    description: "We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.",
    imageUrl: img5,
  },
  {
    title: "AtStay",
    description: "We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.",
    imageUrl: img6,
  },
  {
    title: "At Buzz",
    description: "We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.",
    imageUrl: img7,
  },
];

const Segment = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const segmentSectionRef = useRef(null);
  const controls = useAnimation();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    const handleScroll = () => {
      if (segmentSectionRef.current && !isSmallScreen) {
        const sectionTop = segmentSectionRef.current.offsetTop;
        const sectionHeight = segmentSectionRef.current.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          setScrollPosition(scrollY - sectionTop);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    if (containerRef.current && !isSmallScreen) {
      const containerWidth = containerRef.current.scrollWidth - window.innerWidth;
      const progress = scrollPosition / (window.innerHeight * 2);
      const xOffset = -progress * containerWidth;

      controls.start({ x: xOffset, transition: { type: 'tween', ease: 'linear' } });
    }
  }, [scrollPosition, controls, isSmallScreen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-10 to-black text-white">
      <div className="container mx-auto px-4 py-16 mt-9">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16">We Bring The Whole Atraski!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our mission - is to bring brands closer to their audiences through strategic, creative, and results-driven digital solutions!</h2>
          </div>
          <div className="space-y-4 tracking-widest text-lg">
            <p>By blending creativity with data-backed strategies, we help brands not only reach their goals but exceed them. At Atraski India, we’re passionate about helping businesses tell their story authentically and achieve measurable success.</p>

          <p> Every project we undertake is a step toward building long-lasting relationships that elevate brands to new heights, transforming visions into reality through the power of strategic marketing!</p>

         
          </div>
        </div>
      </div>
      <div className={`${isSmallScreen ? '' : 'h-[300vh]'}`} ref={segmentSectionRef}>
        <div className={`${isSmallScreen ? '' : 'sticky top-0 h-screen'} overflow-hidden`}>
          <motion.div
            ref={containerRef}
            className={`flex ${isSmallScreen ? 'flex-col' : 'items-start'} p-8`}
            animate={isSmallScreen ? {} : controls}
          >
            {segments.map((segment, index) => (
              <SegmentItem key={index} segment={segment} isSmallScreen={isSmallScreen} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SegmentItem = ({ segment, isSmallScreen }) => {
  return (
    <div className={`${isSmallScreen ? 'mb-12' : 'flex-shrink-0 w-[50vw] max-w-lg'} flex flex-col items-start`}>
      <div className={`relative ${isSmallScreen ? 'w-full h-44' : 'w-96'} mb-6`}>
        <img
          src={segment.imageUrl}
          alt={segment.title}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <h2 className={`text-2xl font-bold mb-4 text-white ${isSmallScreen ? '' : 'pt-20'}`}>{segment.title}</h2>
      <p className="text-gray-300 text-base max-w-md">{segment.description}</p>
    </div>
  );
};

export default Segment;
