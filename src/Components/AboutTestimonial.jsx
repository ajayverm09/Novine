// components/TestimonialSlider.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jason Statham",
    title: "Founder at Brand",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis consectetur libero minus accusamus fugit iste pariatur atque reprehenderit illum quod?`,
  },
  {
    name: "Emily Carter",
    title: "CEO at Company",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: "Liam Johnson",
    title: "CTO at Startup",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white py-16 sm:py-20 px-4 text-center bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('https://novine-react.envytheme.com/images/testimonials-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg mb-6"
            />
            <p className="text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed px-2 sm:px-6">
              “{testimonials[current].text}”
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {testimonials[current].name}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              {testimonials[current].title}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-white scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
