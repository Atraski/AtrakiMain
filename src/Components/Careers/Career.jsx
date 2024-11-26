import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CareersPage() {
  const [filter, setFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const jobs = [
    {
      id: 1,
      title: "Senior Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Content Strategist",
      department: "Content",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
    },
    {
      id: 5,
      title: "SEO Specialist",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Contract",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Digital Strategist",
      quote: "Joining this company was the best decision of my career...",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Designer",
      quote:
        "The creative freedom and support I receive here are unparalleled...",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Marketing Manager",
      quote: "I've never worked with such a diverse and talented group...",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.department.toLowerCase() === filter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-10 to-black text-gray-100">
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative py-32 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.h1
            className="text-4xl font-extrabold mb-6 text-white"
            variants={fadeIn}
          >
            Join Our <span className="text-pink-800">Digital Revolution</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-gray-200 mb-8"
            variants={fadeIn}
          >
            Be part of a team thats shaping the future of digital marketing.
          </motion.p>
          <motion.div variants={fadeIn}>
            
            <button className="rounded-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg">
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Culture Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-b from-purple-10 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Why Join Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                description: "Exploring new technologies.",
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Work with a diverse team.",
              },
              {
                icon: Briefcase,
                title: "Work-Life Balance",
                description: "Flexible work arrangements.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg"
                variants={fadeIn}
              >
                <div className="text-pink-400 mb-2">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Job Listings Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Open Positions
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            variants={fadeIn}
          >
            {["all", "marketing", "content", "design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full ${
                  filter === tab
                    ? "bg-pink-900 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-fuchsia-700 p-6 rounded-lg"
                variants={fadeIn}
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-300">
                  {job.department} • {job.location}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <button className="px-4 py-2 text-pink-600 border border-pink-700 rounded-full hover:bg-pink-900 hover:text-white">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-b from-purple-10 to-black mb-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            What Our Team Says
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <Quote className="h-8 w-8 text-pink-400 mb-2" />
                      <p className="text-lg italic text-gray-300 mb-4">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <p className="font-semibold text-pink-400">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-600 p-2 rounded-full text-white -ml-4"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-600 p-2 rounded-full text-white -mr-4"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mt-0 px-4 sm:px-6 lg:px-8 mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold " variants={fadeIn}>
            Dont See a Perfect Fit?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-gray-300" variants={fadeIn}>
            We are always on the lookout for talented individuals. Drop us a
            line and lets chat about your future with us.
          </motion.p>
          <motion.div className="flex gap-4" variants={fadeIn}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 border-gray-600 text-white"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white">
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
