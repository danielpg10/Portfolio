import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      let left = containerRect.left + (containerRect.width - tooltipRect.width) / 2;
      let top = containerRect.bottom + 10;

      if (left < 10) {
        left = 10; 
      } else if (left + tooltipRect.width > windowWidth - 10) {
        left = windowWidth - tooltipRect.width - 10; 
      }

      setPosition({ top, left });
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap"
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
