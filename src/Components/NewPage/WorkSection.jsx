
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WorkSection() {
  const projects = [
    { id: 1, title: "Project 1", category: "Web Design" },
    { id: 2, title: "Project 2", category: "Branding" },
    { id: 3, title: "Project 3", category: "UI/UX" },
    { id: 1, title: "Project 1", category: "Web Design" },
    { id: 2, title: "Project 2", category: "Branding" },
    { id: 3, title: "Project 3", category: "UI/UX" },
  ];

  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Selected Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img src={`https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/645b454210447453436bd1c3_Asset%2017%402x.webp`} alt={project.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">View Project</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="text-neutral-400">{project.category}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
