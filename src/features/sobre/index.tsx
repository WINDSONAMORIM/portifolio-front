import image from "../../assets/fullstack_portfolio_portrait_prata_sapato_social.png";
import imageMobile from "../../assets/Editedimage_1787962524046.png";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaLayerGroup } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";

const solfSkills = [
  {
    title: "Aprendizado Continuo",
    icon: <HiOutlineLightBulb size="2rem" color="#1f8bfa" />,
  },
  {
    title: "Boas Praticas",
    icon: <FaLayerGroup size="2rem" color="#1f8bfa" />,
  },
  {
    title: "Trabalho em equipe",
    icon: <GrGroup size="2rem" color="#1f8bfa" />,
  },
  {
    title: "Foco em resultados",
    icon: <MdRocketLaunch size="2rem" color="#1f8bfa" />,
  },
];

export const Sobre = () => {
  return (
    <section className="min-w-full m-5 grid grid-cols-1 items-center md:grid-cols-[1fr_2fr]">
      <picture>
        <source media="(min-width: 768px)" srcSet={image} />
        <img
          src={imageMobile}
          className="mx-auto w-48 h-48 rounded-full border-4 border-[#1f8bfa] object-cover md:w-full md:h-full md:rounded-none md:border-0"
        />
      </picture>
      <div className="h-full flex flex-col justify-evenly p-10">
        <h2 className="text-5xl font-bold text-white">Windson</h2>
        <h2 className="text-3xl font-bold text-[#1F8BFA]">Amorim</h2>
        <h6 className="text-white mt-1">
          Desenvolver Full Stack | Estudante de Desenvolvimento de Sistemas
        </h6>

        <div className="h-px w-32 my-5 bg-[#1f8bfa]" />

        <div className="space-y-5 w-full h-full">
          <p className="text-2xl text-white">
            Estou em transição para a área de tecnologia, com foco no
            desenvolvimeto Full Stack.
          </p>
          <p className="text-2xl text-white">
            Trabalho com React, Next.js, TypeScript, Node.js, Python e banco de
            dados, buscando transformar problemas reais em soluções simples,
            funcionais e bem estruturadas
          </p>
          <p className="text-2xl text-white">
            Tenho experência em APIs, arquitetura de aplicações e
            desenvolvimento de sistemas. Gosto de aprender continuamente,
            resolver problemas, melhorar processos e criar projetos que gerem
            valor de verdade
          </p>
          <p className="text-2xl text-white">
            Minha experiência profissional em áreas administrativas contribuiu
            para desenvolver minha organização, visão de processos e capacidade
            de encontrar soluções.
          </p>
          <p className="text-2xl text-white">
            Nas minhas horas vagas gosto de assistir filmes e series, estar com
            minha família e praticar esportes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-5 md:grid-cols-4">
          {solfSkills.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center p-5 border border-[#1f8bfa] rounded-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#1f8bfa]/10"
            >
              {s.icon}

              <p className="text-white text-center mt-2">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};