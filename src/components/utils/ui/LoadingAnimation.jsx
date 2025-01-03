import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        className="text-white text-center"
        initial={{ scale: 1 }}
        animate={{ scale: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Daniel Gomez
        </motion.h1>
        <motion.p
          className="text-3xl md:text-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Developer
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;