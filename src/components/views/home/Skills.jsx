import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiFlutter, SiPostgresql, SiMongodb, SiJquery, SiExpress, SiDjango, SiSpring, SiMysql, SiFirebase, SiTypescript, SiFlask, SiTailwindcss, SiFastapi, SiLaravel, SiDotnet } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiDart, DiPhp } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import SkillsSphere from '../../utils/ui/SkillsSphere';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "SQL", icon: TbSql, color: "#4479A1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "NodeJS", icon: FaNodeJs, color: "#339933" },
  { name: "PHP", icon: DiPhp, color: "#777BB4" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Dart", icon: DiDart, color: "#0175C2" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
];

export default function Skills() {
  const { t } = useTranslation('global');  

  return (
    <section id="skills" className="min-h-screen bg-black py-16 px-2 sm:px-4 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden relative z-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 relative z-10">
        <motion.div 
          className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left px-2 sm:px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{t('skills.skillsTitle')}</span>
          </h2>
          <p className="text-lg md:text-xl font-fira-sans font-normal text-gray-300 mb-4 leading-relaxed max-w-[300px] sm:max-w-[400px] md:max-w-xl mx-auto lg:mx-0 break-words whitespace-pre-wrap">
            {t('skills.des')}
          </p>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillsSphere skills={skills} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}