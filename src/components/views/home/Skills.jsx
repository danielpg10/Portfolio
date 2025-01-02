import React from 'react';
import { motion } from 'framer-motion';
import Fondo from '../../../assets/img/fondo.avif';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black flex flex-col justify-center items-center p-4 relative z-10">
      <div 
        className="rounded-3xl w-full max-w-8xl mx-auto p-8 min-h-[83vh] flex relative overflow-hidden"
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="w-1/2 pr-8 relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black text-left font-fira-sans"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            Habilidades
          </motion.h2>
          <motion.p 
            className="text-black text-lg md:text-xl font-fira-sans font-normal"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Soy Marlon Daniel Portuguez Gomez, un apasionado desarrollador web y de aplicaciones móviles con experiencia en tecnologías frontend y backend. Me encanta crear experiencias digitales intuitivas, funcionales y visualmente atractivas. Siempre estoy en búsqueda de nuevos desafíos que me permitan aprender y crecer profesionalmente.
          </motion.p>

          <motion.p 
            className="text-black text-lg md:text-xl font-fira-sans font-normal"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ¡Construyamos algo increíble juntos!
          </motion.p>
        </div>
        <div className="w-1/2 relative z-10">



        </div>
      </div>
    </section>
  );
}