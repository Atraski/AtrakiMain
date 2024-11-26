/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col md:flex-row overflow-hidden bg-gradient-to-b from-purple-10 to-black"
      data-scroll-section
    >
      <motion.div
        className="w-full md:w-1/2 h-1/2 md:h-full relative"
        style={{ y }}
      >
        <img
          src="https://www.himalayanbuzz.com/wp-content/uploads/2018/05/Himalayan-Buzz.jpg"
          alt="Fashion model showcase"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-gray-100">
        <div className="text-center md:text-left p-8">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Atraski Fashion
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Redefining style
          </motion.p>
          <motion.button
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
}
