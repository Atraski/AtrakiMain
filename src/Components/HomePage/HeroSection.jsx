// HeroSection.js

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="container mx-auto px-4 py-20 text-center">
    <motion.h1
      className="text-4xl md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     
      <span className="text-5xl md:text-7xl">Innovative Marketing</span>
    </motion.h1>
    <motion.p
      className="text-xl mb-8 text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Transforming ideas into impactful digital experiences
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <Link
        to="/contact"
        className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 inline-flex items-center"
      >
        Get Started
        <ArrowRight className="ml-2" />
      </Link>
    </motion.div>
  </section>
);

export default HeroSection;
