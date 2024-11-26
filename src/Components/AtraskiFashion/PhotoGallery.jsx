
import { motion } from 'framer-motion';

const photos = [
    
  { src: 'https://www.jobskills.org/wp-content/uploads/2023/08/Untitled-design-18.jpg', alt: 'Fashion model in urban setting' },

  { src: 'https://www.jobskills.org/wp-content/uploads/2023/08/Untitled-design-18.jpg', alt: 'Close-up of designer dress' },

  { src: 'https://images.squarespace-cdn.com/content/v1/55a4279ce4b0543aa4ee89c5/1546991626693-XGARZRR5OC87H2WRX69C/40205741_10155933318971553_8900703427512762368_o.jpg?format=1500w', alt: 'Close-up of designer dress' },

  { src: 'https://images.squarespace-cdn.com/content/v1/55a4279ce4b0543aa4ee89c5/1546991626693-XGARZRR5OC87H2WRX69C/40205741_10155933318971553_8900703427512762368_o.jpg?format=1500w', alt: 'Close-up of designer dress' },

  { src: 'https://media.koelnmesse.io/hh/redaktionell/h-h/img/events/fashion-show-2024/h-h_cologne_fashion_show_02.png', alt: 'Close-up of designer dress' },

  { src: 'https://media.koelnmesse.io/hh/redaktionell/h-h/img/events/fashion-show-2024/h-h_cologne_fashion_show_02.png', alt: 'Close-up of designer dress' },

  { src: 'https://media.koelnmesse.io/hh/redaktionell/h-h/img/events/fashion-show-2024/h-h_cologne_fashion_show_02.png', alt: 'Close-up of designer dress' },
 
];

const PhotoGallery = () => (
  <section className="py-20 bg-gradient-to-b from-purple-10 to-black  min-h-screen">
    <div className="container mx-auto px-4">
    <motion.h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
         Atraski fashion
        </motion.h1>
      {/* <motion.h2 className="text-4xl font-bold mb-12 text-center"> Collections</motion.h2> */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div key={index} className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
            <img src={photo.src} alt={photo.alt} className="w-full h-auto object-cover" />
            <div className="absolute inset-0  bg-opacity-50 flex items-end justify-center opacity-0 transition-opacity duration-300">
              <p className="text-white text-sm p-4 text-center">{photo.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoGallery;
