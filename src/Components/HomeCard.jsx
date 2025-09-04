// src/components/PromoCards.jsx
import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "Don't Miss Today’s Featured Deals",
    button: "DISCOVER NOW",
    image:
      "https://novine-react.envytheme.com/images/category-product-image/cp-img9.jpg", // Man
  },
  {
    id: 2,
    title: "Need It Now",
    subtitle: "New Personalizable Collection",
    button: "DISCOVER NOW",
    image:
      "https://novine-react.envytheme.com/images/category-product-image/cp-img10.jpg", // Woman
  },
];

const PromoCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image with hover zoom */}
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              whileHover={{ scale: 1.1 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center bg-black/20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-left px-6 sm:px-10 text-black max-w-[70%] bg-white/70 rounded-lg py-4 shadow-md"
              >
                <p className="text-sm sm:text-base mb-1">{card.subtitle}</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {card.title}
                </h2>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-5 py-2 border border-black text-black transition text-sm rounded-md"
                >
                  {card.button}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PromoCards;
