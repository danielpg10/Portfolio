import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const codeSnippet =
    "const dev = 'Daniel Gomez';\nconsole.log('Hello, I'm ' + dev + '!');";

  return (
    <AnimatePresence>
      {" "}
      <motion.div
        key="loading"
        className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: { duration: 0.5, delay: 2, scale: { duration: 0.5 } },
        }}
      >
        {" "}
        <motion.div
          className="relative text-white text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 relative z-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            Daniel Gomez{" "}
          </motion.h1>{" "}
          <motion.p
            className="text-xl sm:text-3xl md:text-4xl relative z-10 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {" "}
            Developer{" "}
          </motion.p>{" "}
          <motion.div
            className="bg-gray-800 p-4 rounded-lg text-left text-xs sm:text-sm md:text-base font-mono relative z-10 max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {" "}
            {codeSnippet.split("\n").map((line, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {" "}
                {line}{" "}
              </motion.div>
            ))}{" "}
          </motion.div>{" "}
        </motion.div>{" "}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {" "}
          {["<React>", "Python:", "(JavaScript)", "[Flutter]"].map((tech, index) => (
            <motion.span
              key={tech}
              className="text-white text-lg sm:text-xl md:text-2xl font-mono"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
            >
              {" "}
              {tech}{" "}
            </motion.span>
          ))}{" "}
        </motion.div>{" "}
      </motion.div>{" "}
    </AnimatePresence>
  );
};

export default LoadingAnimation;