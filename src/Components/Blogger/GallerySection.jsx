/* eslint-disable react/prop-types */
// components/GallerySection.js

import { AnimatePresence, motion } from "framer-motion";

const GallerySection = ({ currentImage, galleryImages, nextImage, prevImage }) => {
  return (
    <section className="mb-16 ">
      <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">Blogger Mela Moments</h3>
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={galleryImages[currentImage]}
            alt={`Blogger Mela Moment ${currentImage + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          onClick={prevImage}
        >
          &#9664; {/* Left Arrow Symbol */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          onClick={nextImage}
        >
          &#9654; {/* Right Arrow Symbol */}
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
