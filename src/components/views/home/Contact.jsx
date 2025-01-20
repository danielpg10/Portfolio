import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import qrCode from "../../../assets/img/avatar - 06.png"

const Contact = () => {
  const questions = [
    "¿Quieres dar un giro tecnológico a tu negocio?",
    "¿Estás buscando un cambio tecnológico?",
    "¿Quieres llevar tu proyecto al siguiente nivel?",
    "¿Necesitas soluciones tecnológicas creativas?",
    "¿Estás listo para transformar tu visión en realidad?",
    "¿Estás listo para innovar con tecnología?",
    "¿Estás listo para digitalizar tu negocio?"
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden relative z-0"
    >
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 relative z-10">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md h-72 perspective-1000">
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
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white text-left">Marlon Daniel Portuguez Gomez</h3>
                      <p className="text-sm text-gray-300 text-left">Tecnólogo en Análisis y Desarrollo de Software</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpg2020md@gmail.com"
                        className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        <FaEnvelope className="mr-2" aria-label="Email" />
                        <span>danielpg2020md@gmail.com</span>
                      </a>
                      <div className="flex items-center text-sm text-gray-300">
                        <FaMapMarkerAlt className="mr-2" aria-label="Ubicación" />
                        <span>Bogotá, Colombia</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-end w-1/3">
                    <img
                      src={qrCode || "/placeholder.svg"}
                      alt="QR Code"
                      className="w-full h-auto max-w-[120px] rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Contáctame
            </span>
          </h2>
          <motion.h3
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
          >
            {questions[currentQuestion]}
          </motion.h3>
          <p className="text-lg md:text-xl font-fira-sans font-normal text-gray-300 mb-8 leading-relaxed">
            Estoy aquí para convertir tus visiones en realidad digital. Con experiencia en desarrollo de software y un
            enfoque creativo, estoy listo para enfrentar nuevos desafíos y crear soluciones impactantes. ¡Conectemos y
            hagamos algo extraordinario juntos!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

