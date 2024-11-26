

import { motion } from "framer-motion";

import IntroSection from "./IntroSection";
// import VideoSection from "./VideoSection";
import TextSection from "./TextAnimation";
import WorkSection from "./WorkSection";
import AnimationSection from "./Animation";
// import PhotoGallery from "../AtraskiFashion/PhotoGallery";

function NewPage() {

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-white bg-opacity-90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a to="/" className="text-lg font-medium hover:opacity-80 transition-opacity">
            hello!
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-8"
        >
          <a to="/work" className="hover:opacity-80 transition-opacity">
            Work
          </a>
          <a to="/about" className="hover:opacity-80 transition-opacity">
            About
          </a>
          <a to="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </a>
         
        </motion.div>
      </nav>

      <main>
        <IntroSection />
        {/* <VideoSection /> */}
        <TextSection />
        <AnimationSection />
        <WorkSection />
      
      </main>
    </div>
  );
}

export default NewPage;
