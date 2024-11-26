/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Lightbulb, Users } from "lucide-react";

function AnimatedBusinessEShower() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" mt-12 flex flex-col min-h-screen bg-gradient-to-b from-purple-10 to-black text-white overflow-hidden">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-800">
              Business E-Shower: Celebrate Innovation
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
              A virtual gathering supporting new businesses and fostering growth
            </p>
            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-800 text-white px-6 py-3 text-lg rounded-lg  transition-all duration-300 flex items-center justify-center sm:inline-flex">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
            </button>
          </motion.div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-800"
            >
              What Sets Us Apart
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <FeatureCard
                icon={<Globe className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400" />}
                title="Global Connectivity"
                description="Connect with entrepreneurs and industry leaders from around the world, all from the comfort of your screen."
                delay={0.4}
                imageSrc="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                imageAlt="Global business network illustration"
              />
              <FeatureCard
                icon={<Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-pink-400" />}
                title="Innovative Platform"
                description="Experience cutting-edge virtual networking tools designed to foster meaningful connections and idea exchange."
                delay={0.6}
                imageSrc="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                imageAlt="Virtual innovation platform illustration"
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400" />}
                title="Diverse Community"
                description="Engage with a vibrant mix of seasoned entrepreneurs, startups, and industry experts across various sectors."
                delay={0.8}
                imageSrc="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                imageAlt="Diverse business community illustration"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-800">
              Ready to Transform Your Business Journey?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-300">
              Join Business E-Shower and be part of a revolutionary virtual experience thats shaping the future of
              entrepreneurship.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay, imageSrc, imageAlt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="text-center bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 p-4 sm:p-6 rounded-lg"
    >
      <div className="mx-auto mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
      <img
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={200}
        className="rounded-lg object-cover w-full h-40 sm:h-48"
      />
    </motion.div>
  );
}

export default AnimatedBusinessEShower;
