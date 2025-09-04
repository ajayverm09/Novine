// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://novine-react.envytheme.com/images/main-banner-image/banner-new-bg13.jpg",
    title: "WINTER-SPRING 2020!",
    subtitle: "Take 20% Off ‘Sale Must-Haves’",
    cta: "Limited Time Offer!",
  },
  {
    image:
      "https://novine-react.envytheme.com/images/main-banner-image/banner-new-bg14.jpg",
    title: "TRAVEL-SPRING 2020!",
    subtitle: "Up To 30% OFF Select Styles",
    cta: "New Inspiration 2020",
  },
  {
    image:
      "https://novine-react.envytheme.com/images/main-banner-image/banner-new-bg15.jpg",
    title: "SUMMER-SPRING 2020!",
    subtitle: "Trending from men and women style collection",
    cta: "New Inspiration 2020!",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HeroSlider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-6 md:px-12">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="max-w-xl text-center md:text-left text-white"
                >
                  <motion.p
                    className="text-sm md:text-base mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.cta}
                  </motion.p>

                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-base sm:text-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#e5e7eb",
                        color: "#000",
                      }}
                      className="bg-white text-black px-6 py-2 text-sm font-semibold transition rounded"
                    >
                      SHOP WOMEN&apos;S
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#fff",
                        color: "#000",
                      }}
                      className="border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition rounded"
                    >
                      SHOP MEN&apos;S
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
