"use client";

import { motion } from "framer-motion";
import logo from "../assets/logo.png";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`w-lg *:h-lg ${className}`}>
      <motion.img
        src={logo}
        alt="logo ou foto do Perfil"
        className="w-full h-full object-contain"
        animate={{
          y: [0, -4, 0],
          rotate: [0, 2, 0],
          filter: [
            "drop-shadow(0 0 6px rgba(0,180,255,0.3))",
            "drop-shadow(0 0 14px rgba(0,180,255,0.7))",
            "drop-shadow(0 0 6px rgba(0,180,255,0.3))",
          ],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          filter: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};
