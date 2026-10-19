import { useState } from "react";
import { motion } from "motion/react";

interface CarroselProps {
  prints: string[];
}

export const Carrosel = ({ prints }: CarroselProps) => {
  const [current, setCurrent] = useState(0);

  const total = prints.length;

  if (total === 0) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const getPosition = (index: number) => {
    const diff = (index - current + total) % total;

    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === total - 1) return -1;

    return 2;
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 30,
    },
    left: {
      x: "-65%",
      scale: 0.75,
      rotateY: 25,
      opacity: 0.6,
      zIndex: 20,
    },
    right: {
      x: "65%",
      scale: 0.75,
      rotateY: -25,
      opacity: 0.6,
      zIndex: 20,
    },
    hidden: {
      x: "0%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
    },
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div
        className="relative h-[350px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {prints.map((print, index) => {
          const position = getPosition(index);

          const variant =
            position === 0
              ? "center"
              : position === -1
                ? "left"
                : position === 1
                  ? "right"
                  : "hidden";

          return (
            <motion.div
              key={index}
              variants={variants}
              initial={false}
              animate={variant}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute w-[65%] max-w-[500px] aspect-video cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                pointerEvents: position === 2 ? "none" : "auto",
              }}
              onClick={() => {
                if (position === -1) previous();
                if (position === 1) next();
              }}
            >
              <img
                src={print}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/20"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={previous}
          className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
        >
          ❮
        </button>

        <span className="text-white/70 text-sm">
          {current + 1} / {total}
        </span>

        <button
          onClick={next}
          className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};
