import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-semibold text-gray-900 uppercase">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Get the latest updates, promotions, and style news directly to your inbox.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 text-sm border border-gray-300 bg-gray-50 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-black text-white px-6 py-3 text-sm font-medium rounded-r-md hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default NewsletterSection;
