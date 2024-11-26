// CallToActionSection.js

import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const CallToActionSection = () => (
  <section className="container mx-auto px-4 py-10 sm:py-16 text-center">
    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
      Ready to Elevate Your Brand?
    </h2>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-pink-800">
      Let’s create something amazing together.
    </p>
    <Link
      to="/contact"
      className="bg-gradient-to-r from-purple-700 to-pink-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-700 transition duration-300 inline-flex items-center"
    >
      Contact Us
      <Send className="ml-2" />
    </Link>
  </section>
);

export default CallToActionSection;
