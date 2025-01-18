import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Cursor from '../../utils/ui/Cursor';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import avatar from '../../../assets/img/avatar - 01.png';
import { Tooltip } from '../../utils/ui/Tootip';
import HamburgerMenu from '../../HamburgerMenu';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Footer from './footer';
import WaveDivider from '../../utils/ui/WaveDivider';
import { useTranslation } from 'react-i18next';
import LoadingAnimation from '../../utils/ui/LoadingAnimation';
import ParticleBackground from '../../utils/ui/Particles';
import LanguageSwitcher from '../../utils/ui/SwitchLan';

const waveAnimation = {
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation('global');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <motion.div 
      className="bg-black font-['Archivo_Black'] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ParticleBackground />
        </Canvas>
      </div>

      {!isMobile && <Cursor />}

      <header className="w-full p-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-black bg-opacity-50">
        <div className="flex items-center">
          <img 
            src={avatar} 
            alt="Avatar" 
            className="rounded-full w-10 h-10 mr-3"
          />
          <span className="text-white font-bold">Daniel Gomez</span>
        </div>
        
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-white hover:text-blue-500">{t('homePage.aboutMe')}</a></li>
            <li><a href="#skills" className="text-white hover:text-blue-500">{t('homePage.skills')}</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-500">{t('homePage.contact')}</a></li>
          </ul>
        </nav>
        
        <div className="hidden lg:flex space-x-4">
          <Tooltip content="Marlon Daniel Portuguez Gomez">
            <a href="https://www.linkedin.com/in/marlon-daniel-portuguez-gomez-65271231a/" className="text-white hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </Tooltip>
          <Tooltip content="danielpg10">
            <a href="https://github.com/danielpg10" className="text-white hover:text-blue-500">
              <FaGithub size={24} />
            </a>
          </Tooltip>
          <Tooltip content="danielpg2020md@gmail.com">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpg2020md@gmail.com" className="text-white hover:text-blue-500">
              <FaEnvelope size={24} />
            </a>
          </Tooltip>
          <Tooltip content="+57 322 926 4366">
            <a href="https://wa.me/573229264366" className="text-white hover:text-blue-500">
              <FaWhatsapp size={24} />
            </a>
          </Tooltip>
        </div>

        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black w-full fixed top-16 left-0 z-40"
          >
            <nav className="p-4">
              <ul className="flex flex-col space-y-4">
                <li><a href="#about" className="text-white hover:text-blue-500" onClick={toggleMenu}>{t('homePage.aboutMe')}</a></li>
                <li><a href="#skills" className="text-white hover:text-blue-500" onClick={toggleMenu}>{t('homePage.skills')}</a></li>
                <li><a href="#contact" className="text-white hover:text-blue-500" onClick={toggleMenu}>{t('homePage.contact')}</a></li>
              </ul>
            </nav>
            <div className="flex justify-center space-x-4 p-4">
              <a href="https://www.linkedin.com/in/marlon-daniel-portuguez-gomez-65271231a/" className="text-white hover:text-blue-500">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/danielpg10" className="text-white hover:text-blue-500">
                <FaGithub size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpg2020md@gmail.com" className="text-white hover:text-blue-500">
                <FaEnvelope size={24} />
              </a>
              <a href="https://wa.me/573229264366" className="text-white hover:text-blue-500">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen flex flex-col justify-center items-center p-4 relative z-10 text-center">
        <motion.p 
          className="text-white text-3xl mb-4 font-bold"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {t('homePage.hi')}{' '}
          <motion.span
            className="inline-block"
            animate="animate"
            variants={waveAnimation}
          >
            👋🏻
          </motion.span>
          {t('homePage.name')}
        </motion.p>
        <motion.h1 
          className="outline-text text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-transparent hover:text-[#99b5e1] transition-colors duration-300"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          style={{
            WebkitTextStroke: '1px #99b5e1',
            textStroke: '1px #99b5e1'
          }}
        >
          Marlon Daniel Portuguez Gomez
        </motion.h1>
        <motion.p 
          className="text-white text-xl md:text-2xl font-bold mt-4 font-['Fira_Sans']"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('homePage.des')}
        </motion.p>
        <motion.p 
          className="text-white text-xl md:text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('homePage.crip')}
        </motion.p>
        <WaveDivider />
      </main>
      <div className="bg-gray-900 relative z-20">
        <AboutMe />
        <Skills />
        <Footer />
      </div>
      <LanguageSwitcher />
    </motion.div>
  );
}