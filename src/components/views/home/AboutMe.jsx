import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Code, Trophy, Users, ChevronDown, ThumbsUp } from 'lucide-react';
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
    transition: {
      duration: 0.2
    }
  }
};

const iconComponents = {
  Briefcase, GraduationCap, Rocket, Code, Trophy, Users, ThumbsUp 
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
      color: "from-blue-400 to-blue-600"
    },
    {
      keyword: t('aboutMe.education'),
      title: t('aboutMe.educationDesc'),
      content: t('aboutMe.educationInstitution'),
      icon: "GraduationCap",
      color: "from-green-400 to-green-600"
    },
    {
      keyword: t('aboutMe.passion'),
      title: t('aboutMe.passionDesc'),
      content: t('aboutMe.passionDesc2'),
      icon: "Rocket",
      color: "from-purple-400 to-purple-600"
    },
    {
      keyword: t('aboutMe.skills'),
      title: t('aboutMe.skillsDesc'),
      content: t('aboutMe.skillsDesc2'),
      icon: "Code",
      color: "from-red-400 to-red-600"
    },
    {
      keyword: t('aboutMe.adaptability'),
      title: t('aboutMe.adaptabilityDesc'),
      content: t('aboutMe.adaptabilityDesc2'),
      icon: "ThumbsUp",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      keyword: t('aboutMe.collaboration'),
      title: t('aboutMe.collaborationDesc'),
      content: t('aboutMe.collaborationDesc2'),
      icon: "Users",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[30%] mb-12 lg:mb-0 order-first lg:order-last lg:pl-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center lg:text-right bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
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
                className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className={`p-6 relative bg-gradient-to-br ${card.color} bg-opacity-10 h-full`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} rounded-bl-full opacity-20`}></div>
                  <IconComponent className={`text-4xl mb-4 ${card.color.split(' ')[1]}`} size={40} />
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${card.color} text-transparent bg-clip-text`}>
                    {card.keyword}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${card.color} mb-4`}></div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">{card.title}</h4>
                  <ChevronDown className={`absolute bottom-2 right-2 transition-transform duration-300 ${activeCard === index ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-300 font-fira-sans text-center">{card.content}</p>
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