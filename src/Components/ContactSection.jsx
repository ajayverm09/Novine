// src/components/ContactSection.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFax,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaSkype,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  return (
    <div className="bg-white text-black w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold inline-flex items-center gap-2">
          <span role="img" aria-label="contact-icon">
            📞
          </span>{" "}
          Contact Us
        </h2>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Here to Help</h2>
            <p className="mb-6">
              Have a question? You may find an answer in our FAQs. But you can
              also contact us.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-gray-700" />
              <span>2750 Quadra Street Victoria, Canada</span>
            </div>
            <div className="flex items-start gap-2">
              <FaPhone className="mt-1 text-gray-700" />
              <span>(+123) 456-7898</span>
            </div>
            <div className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-gray-700" />
              <span>support@novine.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaFax className="mt-1 text-gray-700" />
              <span>+123456</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Opening Hours:</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Monday - Friday:</strong> 8AM - 6PM
              </li>
              <li>
                <strong>Saturday:</strong> 9AM - 3PM
              </li>
              <li>
                <strong>Sunday:</strong>{" "}
                <span className="text-red-500">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Follow Us:</h3>
            <div className="flex flex-wrap gap-3 text-gray-700 text-xl">
              <FaTwitter className="hover:text-black transition" />
              <FaInstagram className="hover:text-black transition" />
              <FaBehance className="hover:text-black transition" />
              <FaSkype className="hover:text-black transition" />
              <FaPinterest className="hover:text-black transition" />
              <FaYoutube className="hover:text-black transition" />
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Drop Us A Line</h2>
          <p className="mb-6">
            We’re happy to answer any questions you have or provide you with an
            estimate. Just send us a message below.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                NAME (required)*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-100 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                EMAIL (required)*
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full bg-gray-100 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                PHONE NUMBER (required)*
              </label>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className="w-full bg-gray-100 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                YOUR MESSAGE (required)*
              </label>
              <textarea
                rows={5}
                placeholder="Enter your Message"
                className="w-full bg-gray-100 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
