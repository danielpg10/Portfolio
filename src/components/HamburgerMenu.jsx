import React from 'react';
import { motion } from 'framer-motion';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none lg:hidden"
      onClick={toggleMenu}
    >
      <motion.span
        className="block w-6 h-0.5 bg-white mb-1"
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 6 : 0
        }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white mb-1"
        animate={{
          opacity: isOpen ? 0 : 1
        }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white"
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -6 : 0
        }}
      />
    </button>
  );
};

export default HamburgerMenu;