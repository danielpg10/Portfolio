import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Code, ThumbsUp, Users, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    transition: {
      duration: 0.3
    }
  }
};

const iconComponents = {
  Briefcase, GraduationCap, Rocket, Code, ThumbsUp, Users
};

const AboutMe = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { t } = useTranslation('global');

  const cards = [
    {
      keyword: t('aboutMe.experience'),
      title: t('aboutMe.developer'),
      content: t('aboutMe.experienceDesc'),
      icon: "Briefcase",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      textColor: "text-blue-100",
      shadowColor: "shadow-blue-500/50"
    },
    {
      keyword: t('aboutMe.education'),
      title: t('aboutMe.educationDesc'),
      content: t('aboutMe.educationInstitution'),
      icon: "GraduationCap",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      textColor: "text-green-100",
      shadowColor: "shadow-green-500/50"
    },
    {
      keyword: t('aboutMe.passion'),
      title: t('aboutMe.passionDesc'),
      content: t('aboutMe.passionDesc2'),
      icon: "Rocket",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      textColor: "text-purple-100",
      shadowColor: "shadow-purple-500/50"
    },
    {
      keyword: t('aboutMe.skills'),
      title: t('aboutMe.skillsDesc'),
      content: t('aboutMe.skillsDesc2'),
      icon: "Code",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      textColor: "text-red-100",
      shadowColor: "shadow-red-500/50"
    },
    {
      keyword: t('aboutMe.adaptability'),
      title: t('aboutMe.adaptabilityDesc'),
      content: t('aboutMe.adaptabilityDesc2'),
      icon: "ThumbsUp",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      textColor: "text-yellow-100",
      shadowColor: "shadow-yellow-500/50"
    },
    {
      keyword: t('aboutMe.collaboration'),
      title: t('aboutMe.collaborationDesc'),
      content: t('aboutMe.collaborationDesc2'),
      icon: "Users",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      textColor: "text-indigo-100",
      shadowColor: "shadow-indigo-500/50"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[30%] mb-12 lg:mb-0 order-first lg:order-last lg:pl-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center lg:text-right bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('homePage.aboutMe')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <p className="text-lg text-center lg:text-right font-fira-sans font-normal text-gray-300 mb-6">
              {t('aboutMe.des')}
            </p>
          </motion.div>
        </div>
        <div className="w-full lg:w-[68%] order-last lg:order-first grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:-ml-4">
          {cards.map((card, index) => {
            const IconComponent = iconComponents[card.icon];
            return (
              <motion.div
                key={index}
                className={`relative ${card.color} rounded-xl overflow-hidden cursor-pointer ${card.shadowColor} transition-all duration-300 ease-in-out`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="p-6 relative h-full backdrop-blur-sm bg-opacity-80">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-full opacity-10"></div>
                  <IconComponent className={`text-4xl mb-4 ${card.textColor}`} size={40} />
                  <h3 className={`text-2xl font-bold mb-2 ${card.textColor}`}>
                    {card.keyword}
                  </h3>
                  <h4 className={`text-lg font-semibold mb-4 ${card.textColor} opacity-90`}>{card.title}</h4>
                  <motion.div
                    className={`absolute bottom-2 right-2 ${card.textColor} bg-white bg-opacity-20 rounded-full p-1`}
                    animate={{ rotate: activeCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      className={`absolute inset-0 ${card.color} bg-opacity-95 flex items-center justify-center p-6 backdrop-blur-md`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={`${card.textColor} font-fira-sans text-center text-lg`}>{card.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;