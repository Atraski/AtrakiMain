/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// components/InfluencerSection.js

import { motion } from "framer-motion";


const InfluencerSection = ({ influencers }) => {
  return (
    <section className="mb-16">
      <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">Who Worked With Us</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {influencers.map((influencer, index) => (
          <motion.div
            key={influencer.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <cardContent className="p-6 text-center">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-[200px] h-[200px] rounded-full mx-auto mb-4 object-cover border-4 border-purple-500"
                />
                <h4 className="font-semibold text-purple-800 text-xl mb-2">{influencer.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{influencer.followers} followers</p>
               
              </cardContent>
            </card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfluencerSection;
