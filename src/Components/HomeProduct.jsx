// src/components/ProductQuickView.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductQuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl w-full relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-gray-600 text-2xl hover:text-black transition"
          >
            &times;
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-auto rounded-md shadow-md"
              />
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold">{product.title}</h2>
              <p className="text-lg font-bold text-red-500">${product.price}</p>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="text-yellow-500">★★★★★</div>
                <a href="#" className="text-sm underline text-gray-600">
                  3 reviews
                </a>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Vendor:</strong> Lereve
              </p>
              <p className="text-sm text-gray-600">
                <strong>Availability:</strong> In stock (7 items)
              </p>
              <p className="text-sm text-gray-600">
                <strong>Product Type:</strong> T-Shirt
              </p>

              {/* Colors */}
              <div>
                <p className="text-sm font-medium">Color:</p>
                <div className="flex gap-2 mt-1">
                  {["black", "white", "green", "lime", "teal"].map((color, idx) => (
                    <span
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-sm font-medium">Size:</p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <motion.button
                      key={size}
                      className="px-3 py-1 border rounded text-sm transition hover:bg-black hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity & Cart */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center border px-2 rounded">
                  <button className="px-2 py-1 text-lg hover:text-red-500 transition">-</button>
                  <span className="px-4">1</span>
                  <button className="px-2 py-1 text-lg hover:text-green-500 transition">+</button>
                </div>
                <motion.button
                  className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                    <circle cx="7" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                  </svg>
                  ADD TO CART
                </motion.button>
              </div>

              <a href="#" className="mt-3 underline text-sm font-medium text-black hover:text-blue-600 transition">
                View full info
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductQuickView;
