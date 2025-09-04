import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../Components/BlogsData";
import { motion } from "framer-motion";

const BlogsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#F7F6FB] py-16 sm:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 sm:mb-12 text-gray-900"
        >
          Latest Blogs
        </motion.h2>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={cardVariants}>
              <Link
                to={`/blog/${blog.id}`}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition block"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <span className="text-indigo-600 font-semibold hover:underline">
                    Read More »
                  </span>
                </div>
                <div className="border-t px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 flex justify-between">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
