import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-[300px] sm:h-[350px] md:h-[500px] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_aWcxNUq8NukF1fOKN1bbI9qKrlLqfRkhg&s')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 mb-2 sm:mb-4 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Latest Blogs
        </motion.h1>

        <motion.p
          className="text-gray-200 text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Stay updated with the latest tips, insights, and news about home
          appliance care and services.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BlogHero;
