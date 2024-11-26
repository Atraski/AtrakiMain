import { motion } from "framer-motion";
import "../HomePage/home.css"
function Marquee() {
  // Reusable animation configuration
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],  // Move each item from 0% to -100%
      transition: {
        x: {
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        },
      },
    },
  };

  return (
    <div className=" responsive-marquee w-full h-40 overflow-hidden relative mt-96  ">
      <div className="flex gap-8 whitespace-nowrap">
        {Array(7).fill(
          <motion.h1
            className="bg-clip-text text-transparent text-white sm:text-5xl md:text-7xl lg:text-7xl min-[320px]:text-5xl leading-none font-bold uppercase"
            variants={marqueeVariants}
            animate="animate"
          >
            Atraski
          </motion.h1>
        )}
      </div>
    </div>
  );
}

export default Marquee;
