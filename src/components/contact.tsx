import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface ContactProps {
  icon: IconType;
  name: string;
  href: string;
}

export const Contact = ({ icon: Icon, name, href }: ContactProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="
        group
        flex
        flex-col
        items-center
        gap-3
      "
    >
      <div
        className="
          flex
          h-10
          md:h-20
          w-10
          md:w-20
          items-center
          justify-center
          rounded-2xl

          border
          border-blue-500/20

          bg-slate-800/60

          backdrop-blur-lg

          transition-all
          duration-300

          group-hover:border-blue-400
          group-hover:shadow-[0_0_30px_rgba(59,130,246,.45)]
        "
      >
        <Icon
          className="
            text-4xl
            text-white
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <span
        className="
          text-sm
          text-slate-400

          opacity-0
          translate-y-2

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        {name}
      </span>
    </motion.a>
  );
};
