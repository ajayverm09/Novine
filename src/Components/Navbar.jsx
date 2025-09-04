// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Sign In", path: "/login" },
  ];

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Novine
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -3,
                    color: "#fff",
                    textShadow: "0px 0px 8px #ffffff",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className={`transition duration-300 ${
                      isActive
                        ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black shadow-md overflow-hidden"
          >
            <div className="px-6 pt-3 pb-6 space-y-4">
              {links.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -3,
                      color: "#fff",
                      textShadow: "0px 0px 8px #ffffff",
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)} // close on click
                      className={`block transition duration-300 ${
                        isActive
                          ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                          : "text-gray-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
