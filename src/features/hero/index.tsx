"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedText } from "../../components/animatedText";
import { Logo } from "../../components/logo";
import { Technologies } from "../../components/technologies";
import { Wrapper } from "../../components/wrapper";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset:["start start", "end start"]
  })
   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

   const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <Wrapper>
      <section ref={containerRef} className="hero-section max-w-7xl w-full flex flex-col items-center justify-center">
        <motion.div style={{scale,opacity}} className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center">
          <motion.div initial={{opacity:0,x:-80}}
          whileInView={{opacity:1,x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.8, ease:"easeOut"}} className="w-[33%] flex justify-center items-center min-w-[75]">
            <AnimatedText phrases={["Desenvolvedor Web Full Stack"]} />
          </motion.div>
          <motion.div initial={{opacity:0,x:-80}}
          whileInView={{opacity:1,x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.8, ease:"easeOut"}} className="w-[33%] flex justify-center items-center min-w-[75]">
            <Logo />
          </motion.div>
          <motion.div initial={{opacity:0,x:-80}}
          whileInView={{opacity:1,x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.8, ease:"easeOut"}} className="w-[33%] flex justify-center items-center min-w-[75]">
            <AnimatedText
              phrases={["Transforme suas ideias em experiências incríveis."]}
            />
          </motion.div>
        </motion.div>
        <motion.div style={{opacity,scale}} initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.8, ease:"easeOut"}} className="w-full flex justify-center items-center min-w-[75]">
          <Technologies />
        </motion.div>
      </section>
    </Wrapper>
  );
};
