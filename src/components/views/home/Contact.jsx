import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import Image from "../../../assets/img/avatar - 06.png"
import { useTranslation } from "react-i18next"

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setDisplayText("")
    setIsTyping(true)
  }, [])

  useEffect(() => {
    let timer
    if (isTyping) {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, 100)
      } else {
        setIsTyping(false)
        timer = setTimeout(() => {
          setDisplayText("")
          setIsTyping(true)
        }, 3000)
      }
    }
    return () => clearTimeout(timer)
  }, [displayText, isTyping, text])

  return <span className="pacifico-regular text-[#4a77ff] text-3xl">{displayText}</span>
}

const Contact = () => {
  const { t, i18n } = useTranslation()
  const [showInput, setShowInput] = useState(false)
  const email = "danielpg2020md@gmail.com"

  const questions = [
    t("questions.ques1"),
    t("questions.ques2"),
    t("questions.ques3"),
    t("questions.ques4"),
    t("questions.ques5"),
    t("questions.ques6"),
    t("questions.ques7"),
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [questions.length])

  const handleButtonClick = () => {
    setShowInput(true)
  }

  const handleSendCV = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden relative z-0"
    >
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 relative z-10">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center lg:text-left">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {t("contact.title")}
            </span>
          </h2>
          <motion.h3
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white text-center lg:text-left"
          >
            {questions[currentQuestion]}
          </motion.h3>
          <p className="text-lg md:text-xl font-fira-sans font-normal text-gray-300 mb-4 leading-relaxed text-center lg:text-left">
            {t("contact.des")}
          </p>
          <div className="text-lg md:text-xl font-fira-sans font-normal text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
            <TypewriterText key={i18n.language} text={t("contact.crip")} />
          </div>
          <AnimatePresence>
            {!showInput ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center lg:text-left"
              >
                <button
                  onClick={() => setShowInput(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  {t("contact.mail")}
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md mx-auto lg:mx-0"
              >
                <div className="relative w-full group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy blur-sm"></div>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      readOnly
                      className="w-full px-4 py-3 pr-12 rounded-full bg-black border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-300 relative z-10"
                    />
                    <button
                      type="button"
                      onClick={handleSendCV}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:from-pink-700 hover:to-purple-700 hover:scale-110 z-20"
                    >
                      <FaPaperPlane className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md h-64 perspective-1000">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                top: "-10%",
                left: "-10%",
                right: "-10%",
                bottom: "-10%",
              }}
              animate={{
                backgroundColor: ["#1a1a2e", "#16213e", "#0f3460", "#1e2a3a"],
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transformStyle: "preserve-3d",
              }}
              whileHover="hover"
              variants={{
                hover: {
                  scale: 1.05,
                },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="absolute inset-0"
                variants={{
                  hover: (event) => {
                    if (!event || !event.clientX || !event.clientY) return {}
                    const rect = event.currentTarget.getBoundingClientRect()
                    const x = event.clientX - rect.left
                    const y = event.clientY - rect.top
                    const rotateY = ((x - rect.width / 2) / rect.width) * 20
                    const rotateX = ((rect.height / 2 - y) / rect.height) * 20
                    return {
                      rotateY,
                      rotateX,
                      z: 50,
                    }
                  },
                }}
              >
                <div className="absolute inset-0 flex p-6">
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white text-center sm:text-left">
                        Marlon Daniel Portuguez Gomez
                      </h3>
                      <p className="text-sm text-gray-300 text-center sm:text-left">{t("contact.edu")}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpg2020md@gmail.com"
                        className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center sm:justify-start"
                      >
                        <FaEnvelope className="mr-2" aria-label="Email" />
                        <span>danielpg2020md@gmail.com</span>
                      </a>
                      <div className="flex items-center text-sm text-gray-300 justify-center sm:justify-start">
                        <FaMapMarkerAlt className="mr-2" aria-label="Ubicación" />
                        <span>Bogotá, Colombia</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end w-1/3">
                    <img
                      src={Image || "/placeholder.svg"}
                      alt="Image"
                      className="w-full h-auto max-w-[100px] rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </section>
  )
}

export default Contact