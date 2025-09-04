// src/components/SpecialOffer.jsx
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Linen crochet trim",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img1.jpg",
  },
  {
    id: 2,
    title: "Heartland Alabama",
    price: 300,
    sale: true,
    img: "https://novine-react.envytheme.com/images/product-image/product-img2.jpg",
  },
  {
    id: 3,
    title: "Mermaid pencil midi",
    price: 250,
    originalPrice: 400,
    img: "https://novine-react.envytheme.com/images/product-image/product-img3.jpg",
  },
  {
    id: 4,
    title: "Criss-cross",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img4.jpg",
  },
  {
    id: 5,
    title: "V neck bodycon",
    price: 214,
    img: "https://novine-react.envytheme.com/images/product-image/product-img5.jpg",
  },
  {
    id: 6,
    title: "Cosmic cornucopia",
    price: 541,
    sale: true,
    img: "https://novine-react.envytheme.com/images/product-image/product-img6.jpg",
  },
  {
    id: 7,
    title: "Tenku remastered",
    price: 540,
    originalPrice: 644,
    img: "https://novine-react.envytheme.com/images/product-image/product-img7.jpg",
  },
  {
    id: 8,
    title: "Lined hoodie",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img8.jpg",
  },
];

const SpecialOffer = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Section Title */}
      <motion.h2
        className="text-2xl font-bold mb-8 text-gray-900 text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Special Offer
      </motion.h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="group rounded-md overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              {(product.sale || product.originalPrice) && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              <motion.img
                src={product.img}
                alt={product.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                whileHover={{ rotate: 1 }}
              />
            </div>

            {/* Content */}
            <div className="mt-3 px-3 pb-4 flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-gray-900">
                {product.title}
              </h3>

              {/* Price */}
              <div className="text-sm text-gray-700 mt-2">
                {product.originalPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400">
                      ${product.originalPrice}
                    </span>
                    <span className="font-semibold text-red-500">
                      ${product.price}
                    </span>
                  </div>
                ) : (
                  <span>${product.price}</span>
                )}
              </div>

              {/* Button */}
              <motion.button
                className="mt-3 w-32 border px-3 py-2 text-sm font-medium bg-white text-gray-800 rounded hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ADD TO CART
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffer;
