import  { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import locomotive-scroll styles
import './BackgroundGallery.css'; 
import logo1 from "../../Images/1.jpg"
import logo2 from "../../Images/2.jpg"
import logo3 from "../../Images/3-01.jpg"
import logo4 from "../../Images/4-01.jpg"
import logo5 from "../../Images/5.jpg"
import logo6 from "../../Images/6.jpg"
import logo7 from "../../Images/7.jpg"


const HomeGallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2, // Adjust the speed if needed
    });

    return () => {
      if (scroll) scroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {/* <div className="background-section" data-scroll data-scroll-speed="1" style={{ backgroundImage: `url(${logo8})` }}></div> */}
      <div className="background-section" data-scroll data-scroll-speed="2" style={{ backgroundImage: `url(${logo2})` }}>
        <img src="images/imageb.jpg" alt="" />
      </div>
      <div className="background-section" data-scroll data-scroll-speed="3" style={{ backgroundImage: `url(${logo3})` }}></div>
      <div className="background-section" data-scroll data-scroll-speed="4" style={{ backgroundImage: `url(${logo1})` }}></div>
      <div className="background-section" data-scroll data-scroll-speed="5" style={{ backgroundImage: `url(${logo4})` }}></div>
      <div className="background-section" data-scroll data-scroll-speed="6" style={{ backgroundImage: `url(${logo5})` }}></div>
      <div className="background-section" data-scroll data-scroll-speed="7" style={{ backgroundImage: `url(${logo7})` }}></div>

      {/* <div className="background-section" data-scroll data-scroll-speed="8" style={{ backgroundImage: `url(${logo9})` }}></div> */}

      <div className="background-section" data-scroll data-scroll-speed="9" style={{ backgroundImage: `url(${logo6})` }}></div>
    </div>
  );
};

export default HomeGallery;
