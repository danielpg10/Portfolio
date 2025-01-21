import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { ChevronUpIcon, Briefcase, Wrench, User, FileText } from "lucide-react"
import Image from "../../../assets/img/avatar - 07.png"
import { useTranslation } from "react-i18next"

const ContactLink = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={12} className="sm:text-xl" />
    <span className="sr-only">{label}</span>
  </motion.a>
)

const QuickLink = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    className="flex flex-col items-center justify-center p-1 sm:p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-4 h-4 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-blue-400" />
    <span className="text-[10px] sm:text-sm text-center">{label}</span>
  </motion.a>
)

const Footer = () => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleFooter = () => setIsExpanded(!isExpanded)

  return (
    <footer className="bg-black text-white w-full fixed bottom-0 shadow-lg z-50">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "32px" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden flex flex-col"
      >
        <div className="container mx-auto px-2 sm:px-6 flex flex-col h-full">
          <div className="flex justify-between items-center h-[32px]">
            <motion.button
              onClick={toggleFooter}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUpIcon
                className={`w-4 h-4 sm:w-8 sm:h-8 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </motion.button>
            {!isExpanded && (
              <span className="text-[10px] sm:text-sm w-full text-center">
                © {new Date().getFullYear()} Marlon Daniel Portuguez Gomez
              </span>
            )}
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between py-2 pb-6 sm:py-8 h-full bg-black"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-10 w-full mb-2 sm:mb-4 pb-8 sm:pb-16 lg:pb-0">
                  <div className="flex flex-col items-center justify-between h-full">
                    <motion.h1
                      className="text-lg sm:text-2xl lg:text-3xl font-black text-[#99b5e1] transition-colors duration-300 mt-1 sm:mt-2 text-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Marlon Daniel Portuguez Gomez
                    </motion.h1>
                    <motion.p
                      className="text-white text-xs sm:text-base font-bold mt-2 sm:mt-4 font-['Fira_Sans'] text-center max-w-md mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {t("footer.des")}
                    </motion.p>
                    <div className="flex space-x-2 sm:space-x-6 mt-2 sm:mt-4">
                      <ContactLink
                        Icon={FaLinkedin}
                        href="https://www.linkedin.com/in/marlon-daniel-portuguez-gomez-65271231a/"
                        label="LinkedIn"
                      />
                      <ContactLink Icon={FaGithub} href="https://github.com/danielpg10" label="GitHub" />
                      <ContactLink Icon={FaEnvelope} href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpg2020md@gmail.com" label="Email" />
                      <ContactLink Icon={FaWhatsapp} href="https://wa.me/573229264366" label="WhatsApp" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center h-full order-first lg:order-none">
                    <img
                      src={Image || "/placeholder.svg"}
                      alt="Avatar"
                      className="w-20 h-20 sm:w-40 sm:h-40 rounded-full border-2 sm:border-4 border-white shadow-lg mb-2 sm:mb-4"
                    />
                    <div className="text-center">
                      <span className="pacifico-regular text-[#99b5e1] text-2xl mb-1 block">
                        {t('footer.dev')}
                      </span>
                      <span className="text-[10px] sm:text-sm block">
                        © {new Date().getFullYear()} Marlon Daniel Portuguez Gomez
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center h-full">
                    <motion.h4
                      className="text-lg sm:text-2xl lg:text-3xl font-black text-[#99b5e1] transition-colors duration-300 mb-2 sm:mb-4 text-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {t('footer.links')}
                    </motion.h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-xs mb-6 sm:mb-0">
                      <QuickLink Icon={Briefcase} href="#proyectos" label={t('footer.pro')} />
                      <QuickLink Icon={Wrench} href="#habilidades" label={t('footer.skills')} />
                      <QuickLink Icon={User} href="#sobre-mi" label={t('footer.aboutMe')} />
                      <QuickLink Icon={FileText} href="#curriculum" label="CV" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer