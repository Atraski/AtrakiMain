// components/DiscussionSection.js

import { motion } from "framer-motion";


const DiscussionSection = () => {
  const discussionPoints = [
    {
      title: "Let's Talk About it?",
      content: "Blogger Mela is more than just an event; it's a platform for open discussions, sharing experiences, and exploring the ever-evolving world of digital content creation. Join us in shaping the future of blogging!",
    },
    {
      title: "How is it impacting the bloggers' community?",
      content: "Blogger Mela is revolutionizing the way content creators connect and collaborate. It's fostering a supportive ecosystem where bloggers can learn from each other, find inspiration, and grow their influence collectively.",
    },
    {
      title: "How is it impacting the bloggers' Brands?",
      content: "Through Blogger Mela, content creators are finding new ways to monetize their passion and build strong personal brands. It's opening doors to exciting collaborations and helping bloggers transform their hobbies into thriving businesses.",
    },
  ];

  return (
    <section className="mb-16">
      <h3 className="text-3xl font-bold text-pink-800 mb-8 text-center">Les Talk About It</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-8">
        {discussionPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <card>
              <cardContent className="p-6">
                <h4 className="text-xl font-semibold text-pink-800 mb-4">{point.title}</h4>
                <p className="text-gray-400">{point.content}</p>
              </cardContent>
            </card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscussionSection;
