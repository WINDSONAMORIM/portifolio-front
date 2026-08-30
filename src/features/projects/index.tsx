import { CardProjects } from "../../components/cardProjects";
// import projetoPrestacaoFront from "../../assets/projetoPrestacao.png";
// import projetoPrestacaoBack from "../../assets/projetoPrestacaoBack.png";
// import projetoCSVtoAPI from "../../assets/projetoCsvToAPI.png";
// import projetoDragonBall from "../../assets/projetoDragonBall.png";
import { useRef } from "react";
import { motion,useScroll, useTransform } from "motion/react";
import { projects } from "./data";

export const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

    const scale = useTransform(
      scrollYProgress,
      [0, 0.35, 0.65, 1],
      [0.7, 1, 1, 0.7],
    );
  return (
    <section ref={sectionRef} className="min-h-screen">
      <h2 className="text-3xl font-bold text-center m-8 text-white">
        Projetos
      </h2>
      <motion.div style={{scale}} className="mx-auto max-w-7xl min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 p-4">
       {projects.map((project)=>(
        <CardProjects
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        tags={project.tags}
        link={project.link}
        githubLink={project.githubLink}
       />))}
      </motion.div>
    </section>
  );
};