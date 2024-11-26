import LocomotiveScroll from "locomotive-scroll";

import { useRef, useEffect } from "react";

import CallToActionSection from "./CallToAction";
import HomeAbout from "./HomeAbout";
import HomeProjects from "./HomeProjects";
import HomeAnimate from "./HomeAnimate";
import Marquee from "../ImageParallex/Marquee"

function HomePage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
    });

    return () => {
      scrollInstance.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-10 to-black">
      
      {/* Hero Section */}
      <div className="heroSection h-[60vh] sm:h-[90vh] overflow-visible">
        <HomeAnimate />
        <Marquee />
      </div>

      <div ref={scrollRef} className="mb-6">
        <div
          className="homeabout bg-gradient-to-r from-purple-700 to-pink-800 rounded-3xl p-6 sm:p-12"
          data-scroll
          data-scroll-speed="1.5"
        >
          <HomeAbout />
        </div>
      </div>

      <HomeProjects />

      <CallToActionSection />
    </div>
  );
}


export default HomePage;
