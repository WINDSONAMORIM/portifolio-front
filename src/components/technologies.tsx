import React from 'react';
import { motion } from 'framer-motion';
import * as Techs from '../assets/tecnologias';

export const Technologies: React.FC = () => {
  const icons: string[] = [
    Techs.css,
    Techs.git,
    Techs.html,
    Techs.js,
    Techs.mui,
    Techs.node,
    Techs.postgres,
    Techs.python,
    Techs.react,
    Techs.typeScript,
    Techs.vscode,
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <img
              key={`${icon}-${index}`}
              src={icon}
              alt="Technology icon"
              className="w-24 h-24 md:w-17.5 md:h-17.5 shrink-0 hover:scale-110 transition-transform duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};