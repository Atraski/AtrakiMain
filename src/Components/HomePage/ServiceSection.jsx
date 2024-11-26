/* eslint-disable react/prop-types */
// ServicesSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServicesSection = React.forwardRef(({ controls }, ref) => (
  <section ref={ref} className="container mx-auto px-4 py-16">
    <motion.h2
      className="text-3xl font-bold mb-12 text-center text-white"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.8 }}
    >
      Our Services
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Digital Strategy', 'Content Marketing', 'Social Media Management'].map((service, index) => (
        <motion.div
          key={service}
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <CheckCircle className="text-purple-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">{service}</h3>
          <p className="text-gray-600">Innovative solutions to boost your brands digital presence and engagement.</p>
        </motion.div>
      ))}
    </div>
  </section>
));

// Add a display name for better debugging
ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
