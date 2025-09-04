// src/components/BestSellersSlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart, Eye } from "lucide-react";
import ProductQuickView from "./HomeProduct";

const products = [
  {
    id: 1,
    title: "Mermaid pencil midi",
    price: 250,
    originalPrice: 400,
    img: "https://novine-react.envytheme.com/images/product-image/product-img3.jpg",
  },
  {
    id: 2,
    title: "Criss-cross",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img4.jpg",
  },
  {
    id: 3,
    title: "V neck bodycon",
    price: 214,
    img: "https://novine-react.envytheme.com/images/product-image/product-img5.jpg",
  },
  {
    id: 4,
    title: "Cosmic cornucopia",
    price: 541,
    sale: true,
    img: "https://novine-react.envytheme.com/images/product-image/product-img6.jpg",
  },
  {
    id: 5,
    title: "Tenku remastered",
    price: 540,
    originalPrice: 644,
    img: "https://novine-react.envytheme.com/images/product-image/product-img7.jpg",
  },
  {
    id: 6,
    title: "Lined hoodie",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img8.jpg",
  },
  {
    id: 7,
    title: "Linen crochet trim",
    price: 191,
    img: "https://novine-react.envytheme.com/images/product-image/product-img1.jpg",
  },
  {
    id: 8,
    title: "Heartland Alabama",
    price: 300,
    sale: true,
    img: "https://novine-react.envytheme.com/images/product-image/product-img2.jpg",
  },
  {
    id: 9,
    title: "Urban style jacket",
    price: 450,
    originalPrice: 520,
    img: "https://novine-react.envytheme.com/images/product-image/product-img4.jpg",
  },
  {
    id: 10,
    title: "Modern streetwear",
    price: 380,
    img: "https://novine-react.envytheme.com/images/product-image/product-img5.jpg",
  },
];

const BestSellersSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full bg-white px-2 sm:px-4 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Best Sellers Products</h2>
        <div className="flex gap-4 text-sm md:text-base text-gray-600">
          <button className="hover:text-black transition-colors">All</button>
          <button className="hover:text-black transition-colors">Men</button>
          <button className="hover:text-black transition-colors">Women</button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="!pb-12"
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group relative border rounded-xl bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-rotate-1 hover:scale-105">
              {/* Image */}
              <div className="relative overflow-hidden">
                {(product.sale || product.originalPrice) && (
                  <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-600 to-red-400 text-white text-xs px-2 py-1 rounded shadow animate-pulse">
                    Sale
                  </span>
                )}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition duration-300">
                    <Heart size={16} />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition duration-300"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <div className="mt-2 text-sm">
                  {product.originalPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="line-through text-gray-400">
                        ${product.originalPrice}
                      </span>
                      <span className="font-semibold text-red-500 animate-pulse">
                        ${product.price}
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-700">${product.price}</span>
                  )}
                </div>

                <button className="mt-4 w-full border border-gray-300 px-4 py-2 text-sm font-medium bg-white text-gray-800 rounded transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-white group-hover:shadow-lg group-hover:translate-y-0 opacity-0 translate-y-6 group-hover:opacity-100">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Quick View Popup */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default BestSellersSlider;
