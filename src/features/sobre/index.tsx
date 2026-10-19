import image from "../../assets/fullstack_portfolio_portrait_prata_sapato_social.png";
import imageMobile from "../../assets/Editedimage_1787962524046.png";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaLayerGroup } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";

const solfSkills = [
  {
    title: "Aprendizado Contínuo",
    icon: <HiOutlineLightBulb size="2rem" color="#1f8bfa" />,
  },
  {
    title: "Boas Práticas",
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
          Desenvolvedor Full Stack | Estudante de Análise e Desenvolvimento de
          Sistemas
        </h6>

        <div className="h-px w-32 my-5 bg-[#1f8bfa]" />

        <div className="space-y-5 w-full h-full">
          <p className="text-2xl text-white">
            Sou desenvolvedor Full Stack em transição de carreira para a área de
            tecnologia, com experiência prática na criação de aplicações web,
            automação de processos e integração de sistemas.
          </p>
          <p className="text-2xl text-white">
            Sou desenvolvedor Full Stack em transição de carreira para a área de
            tecnologia, com experiência prática na criação de aplicações web,
            automação de processos e integração de sistemas. Trabalho com React,
            Next.js, TypeScript, Node.js, Python e bancos de dados relacionais,
            desenvolvendo soluções que transformam processos complexos em
            aplicações eficientes, organizadas e intuitivas.
          </p>
          <p className="text-2xl text-white">
            Tenho experiência no desenvolvimento e consumo de APIs REST,
            validação de dados, arquitetura de aplicações e construção de
            dashboards interativos. Busco aplicar boas práticas de programação
            para criar soluções escaláveis e de fácil manutenção.
          </p>
          <p className="text-2xl text-white">
            Minha experiência profissional na área administrativa me proporciona
            uma visão prática das necessidades do negócio, permitindo
            identificar oportunidades de automação, otimização de processos e
            melhoria na análise de dados.
          </p>
          <p className="text-2xl text-white">
            Sou movido pela curiosidade, pelo aprendizado contínuo e pelo
            desafio de resolver problemas reais por meio da tecnologia.
          </p>
          <p className="text-2xl text-white">
            Nas horas vagas, gosto de assistir a filmes e séries, passar tempo
            com minha família e praticar esportes.
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