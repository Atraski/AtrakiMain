import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import './homeslider.css';

const HomeSlider = () => {
  const scrollRef = useRef(null);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [cards] = useState([
    { title: 'Collection 1', image: '' },
    { title: 'Collection 2', image: '' },
    { title: 'Collection 3', image: '' },
    { title: 'Collection 4', image: '' },
    { title: 'Collection 5', image: '' },
    { title: 'Collection 6', image: '' },
    { title: 'Collection 7', image: '' },
  ]);

  // Framer Motion controls for animations
  const controls = useAnimation();

  // Initialize Locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal', // Enable horizontal scrolling
    });

    // Listen to scroll events
    scroll.on('scroll', (obj) => {
      const scrollPositionX = obj.scroll.x;

      // Update card position based on scroll without distinguishing left/right scroll
      controls.start({ x: -scrollPositionX });

      // Handle background color change
      handleScroll(scrollPositionX);
    });

    return () => scroll.destroy(); // Clean up on component unmount
  }, [controls]);

  // Function to handle background color change based on scroll position
  const handleScroll = (positionX) => {
    if (positionX > 300 && positionX < 600) {
      setBgColor('#343131');
    } else if (positionX > 600) {
      setBgColor('#faebd7');
    } else {
      setBgColor('#ffffff');
    }
  };

  return (
    <div className="collection-section" style={{ backgroundColor: bgColor }}>
      <div data-scroll-container ref={scrollRef}>
        <h2 className="collection-title">Our Work</h2>
        <motion.div
          className="cards-container"
          animate={controls} // Bind framer-motion controls to the card container
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSlider;
