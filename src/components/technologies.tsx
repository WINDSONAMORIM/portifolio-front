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
    Techs.pydantic,
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <img key={index} src={icon} className="w-14 h-14 md:w-20 md:h-20 mr-8 shrink-0" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};