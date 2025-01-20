import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
      setIsEnglish(savedLanguage === "en")
    }
  }, [i18n])

  const handleToggle = () => {
    const newLang = isEnglish ? "es" : "en"
    i18n.changeLanguage(newLang)
    setIsEnglish(!isEnglish)
    localStorage.setItem("language", newLang)
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed bottom-[50px] right-4 flex items-center justify-center w-8 h-8 bg-black text-white rounded-full shadow-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110 z-[9998]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="sr-only">{t("languageSwitcher.switchLanguage")}</span>
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center font-semibold text-xs"
          initial={false}
          animate={{ opacity: isEnglish ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          EN
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center font-semibold text-xs"
          initial={false}
          animate={{ opacity: isEnglish ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          ES
        </motion.div>
      </div>
    </motion.button>
  )
}

export default LanguageSwitcher