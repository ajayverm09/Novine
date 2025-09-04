// src/components/FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "FREE SHIPPING WORLD WIDE",
    img: "https://cdn-icons-png.flaticon.com/512/69/69906.png", // airplane icon
  },
  {
    id: 2,
    title: "100% MONEY BACK GUARANTEE",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png", // money icon
  },
  {
    id: 3,
    title: "MANY PAYMENT GATEWAYS",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png", // credit card icon
  },
  {
    id: 4,
    title: "24/7 ONLINE SUPPORT",
    img: "https://cdn-icons-png.flaticon.com/512/891/891399.png", // headset icon
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center group p-4 rounded-xl bg-white shadow hover:shadow-lg transition"
          >
            {/* Icon Wrapper */}
            <motion.div
              whileHover={{ rotateY: 180, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-full shadow-md"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-10 h-10 object-contain"
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              whileHover={{
                scale: 1.05,
                color: "#2563eb",
                textShadow: "0px 0px 8px rgba(37,99,235,0.7)",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="mt-4 text-sm font-semibold text-gray-800 uppercase"
            >
              {feature.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
