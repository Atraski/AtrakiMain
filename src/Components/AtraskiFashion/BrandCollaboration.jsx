
import { motion } from 'framer-motion';

const brands = ['Gucci', 'Prada', 'Versace', 'Chanel', 'Dior', 'Louis Vuitton'];

const BrandCollaborations = () => (
  <section className="py-20 bg-gradient-to-b from-purple-10 to-black">
    <div className="container mx-auto px-4">
      <motion.h2 className="text-4xl font-bold mb-12 text-center text-white">Brand Collaborations</motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand, index) => (
          <motion.div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <span className="text-xl font-semibold">{brand}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandCollaborations;
