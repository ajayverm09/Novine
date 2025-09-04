import React from "react";
import { motion } from "framer-motion";

const AboutOurStore = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 mt-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            About Our Store
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Logo */}
          <motion.img
            src="https://novine-react.envytheme.com/images/signature.png"
            alt="Sunshine Logo"
            className="h-16 sm:h-20 w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Back Image */}
            <motion.img
              src="https://novine-react.envytheme.com/images/about1.jpg"
              alt="Model 2"
              className="hidden md:block w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] rounded-md shadow-lg absolute top-0 right-0 z-0"
              initial={{ opacity: 0, scale: 0.9, y: -30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            {/* Front Image */}
            <motion.img
              src="https://novine-react.envytheme.com/images/about2.jpg"
              alt="Model 1"
              className="relative z-10 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] rounded-md shadow-lg md:top-32 md:-left-16"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStore;
