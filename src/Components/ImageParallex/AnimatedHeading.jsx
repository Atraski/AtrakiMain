
import { motion } from 'framer-motion';

const text = "Atraski India";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01, // Time delay between each letter animation
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedHeading = () => {
  return (
    <div className='scroll-div' data-scroll-section style={{ height: '100vh', backgroundColor: '#D91656', marginTop: "40px" }}>

      <motion.h1
        style={{ margin: '0px', color: "black", position: "relative", top: "5rem", right: "33%", fontSize: "60px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeading;
