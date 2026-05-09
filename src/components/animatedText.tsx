import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  phrases: string[];
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ phrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrase = phrases[phraseIndex] || "";

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < phrase.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 8000);
          return;
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? 30 : 70);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phrase, phrases.length]);

  return (
    <div className="flex items-center justify-center text-center max-w-xl">
      <h1
        className="
          text-white
          text-2xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
          font-weight-bold
          tracking-tight
          leading-tight
          drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
        "
      >
        {phrase.slice(0, charIndex)}
      </h1>

      <motion.div
        className="w-[0.75] h-10 md:h-14 lg:h-16 rounded-full bg-white"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};
