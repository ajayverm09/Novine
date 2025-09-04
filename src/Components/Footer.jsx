import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Fade-up animation for sections
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  // Hover effect for text links
  const linkHover = {
    whileHover: {
      scale: 1.05,
      x: 5,
      color: "#ffffff",
      textShadow: "0px 0px 10px #ffffff",
    },
    transition: { type: "spring", stiffness: 300 },
  };

  // Hover effect for payment icons
  const iconHover = {
    whileHover: {
      scale: 1.2,
      rotate: 5,
      filter: "drop-shadow(0px 0px 10px #ffffff)",
    },
    transition: { type: "spring", stiffness: 250 },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* Top Footer */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Column 1 */}
        <motion.div custom={0} variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 text-white">Novine</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div custom={1} variants={fadeUp}>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block text-white">
            QUICK LINKS
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact Us", path: "/contact" },
              { name: "Sign in", path: "/login" },
            ].map((link, idx) => (
              <motion.li key={idx} {...linkHover} className="cursor-pointer">
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Contact */}
        <motion.div custom={2} variants={fadeUp}>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block text-white">
            CONTACT US
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              <span>2750 Quadra Street, Victoria, Canada</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>(+123) 456-7898</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <span>support@novine.com</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📠</span>
              <span>+123456</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          custom={3}
          variants={fadeUp}
          className="text-center md:text-left mb-4 md:mb-0 text-gray-400"
        >
          © Novine is Proudly Owned by{" "}
          <a
            href="https://envytheme.com"
            className="text-blue-400 hover:underline"
          >
            EnvyTheme.com
          </a>
        </motion.p>

        {/* Payment Icons */}
        <div className="flex space-x-4 flex-wrap justify-center">
          {[
            "visa.png",
            "mastercard.png",
            "mastercard2.png",
            "expresscard.png",
            "expresscard.png",
          ].map((icon, i) => (
            <motion.img
              key={i}
              src={`https://novine-react.envytheme.com/images/${icon}`}
              alt="Payment Icon"
              className="h-10"
              {...iconHover}
            />
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
