import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas, FaGlobeEurope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setIsEnglish(savedLanguage === 'en');
    }
  }, [i18n]);

  const handleToggle = () => {
    const newLang = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
    localStorage.setItem('language', newLang);
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 flex items-center bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
          {isEnglish ? 'EN' : 'ES'}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isEnglish}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
            <motion.div
              className="absolute inset-0 flex items-center justify-between px-1"
              initial={false}
              animate={{ opacity: isEnglish ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaGlobeEurope className="text-white" size={14} />
              <FaGlobeAmericas className="text-white" size={14} />
            </motion.div>
          </div>
        </label>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;