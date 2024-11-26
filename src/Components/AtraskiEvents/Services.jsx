import  { useState } from 'react';
import { motion } from 'framer-motion';

const departments = [
  { name: 'BRAND', href: '/brand', color: 'bg-red-500' },
  { name: 'SPATIAL', href: '/spatial', color: 'bg-blue-500' },
  { name: 'VISUAL', href: '/visual', color: 'bg-green-500' },
  { name: 'PRODUCTION', href: '/production', color: 'bg-yellow-500' },
  { name: 'SHOW', href: '/show', color: 'bg-purple-500' },
  { name: 'DRONE', href: '/drone', color: 'bg-pink-500' },
];

const Departments = () => {
  const [hoveredDepartment, setHoveredDepartment] = useState(null);

  return (
    <section className="bg-white px-6 py-20">
      <h1 className="mb-12 text-xl font-medium">Services</h1>
      <div className="relative">
        {departments.map((dept) => (
          <a
            key={dept.name}
            href={dept.href}
            className="block"
            onMouseEnter={() => setHoveredDepartment(dept.name)}
            onMouseLeave={() => setHoveredDepartment(null)}
          >
            <div className="group relative overflow-hidden py-8">
              <motion.div
                className={`absolute inset-x-0 bottom-0 ${dept.color}`}
                initial={{ height: 0 }}
                animate={{
                  height: hoveredDepartment === dept.name ? '100%' : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <span className="relative block text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-white md:text-7xl lg:text-8xl">
                {dept.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Departments;
