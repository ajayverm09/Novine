// src/pages/About.jsx
import React from "react";
import AboutOurStore from "../Components/AboutStore";
import FeaturesSection from "../Components/HomeFeature";
import TestimonialSlider from "../Components/AboutTestimonial";

const About = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* About Our Store Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20">
        <AboutOurStore />
      </section>

      {/* Testimonials & Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Testimonial Slider */}
          <div className="w-full">
            <TestimonialSlider />
          </div>

          {/* Features Section */}
          <div className="w-full">
            <FeaturesSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
