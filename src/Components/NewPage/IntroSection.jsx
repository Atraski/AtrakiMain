
import { motion, useScroll, useTransform } from "framer-motion";

function IntroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-white text-yellow-500">
      <motion.div className="max-w-6xl mx-auto z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          The Voice Fest
            <br />
            Open Mic
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default IntroSection;
