import { motion, AnimatePresence } from "motion/react";
import { Carrosel } from "./carrosel";
import { useEffect } from "react";

interface ModalGalleryProps {
  prints: string[] | null;
  onClose: () => void;
}

export const ModalGallery = ({ prints, onClose }: ModalGalleryProps) => {
  useEffect(() => {
    if (!prints) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prints, onClose]);

  return (
    <AnimatePresence>
      {prints && (
        <motion.div
          key="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/80 backdrop-blur-md
            p-4
          "
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Galeria de imagens do projeto"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative w-full max-w-6xl
              rounded-2xl
              bg-[#00152e]
              border border-white/20
              shadow-2xl
              p-6
            "
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria"
              className="
                absolute top-4 right-4 z-50
                text-white text-2xl
                hover:text-red-400
                cursor-pointer
              "
            >
              ✕
            </button>

            <h2 className="text-white text-xl font-bold text-center">
              Galeria do Projeto
            </h2>

            <Carrosel prints={prints} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
