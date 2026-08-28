import image from "../../assets/fullstack_portfolio_portrait_prata_sapato_social.png";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaLayerGroup } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";

export const Sobre = () => {
  return (
    <section className="w-full grid grid-cols-[1fr_2fr]">
      <div>
        <img src={image}></img>
      </div>
      <div className="p-9 w-3xl">
        <h2 className="text-5xl font-bold text-white">Windson</h2>
        <h2 className="text-3xl font-bold text-[#1F8BFA]">Amorim</h2>
        <h6 className="text-white mt-1">
          Desenvolver Full Stack | Estudante de Desenvolvimento de Sistemas
        </h6>

        <div className="h-px w-32 my-5 bg-[#1f8bfa]" />

        <div className="space-y-5 w-full">
          <p className="text-white">
            Estou em transição para a área de tecnologia, com foco no
            desenvolvimeto Full Stack.
          </p>
          <p className="text-white">
            Trabalho com React, Next.js, TypeScript, Node.js, Python
            e banco de dados, buscando transformar problemas reais em soluções
            simples, funcionais e bem estruturadas
          </p>
          <p className="text-white">
            Tenho experência em APIs, arquitetura de aplicações e
            desenvolvimento de sistemas. Gosto de aprender continuamente, resolver problemas,
            melhorar processos e criar projetos que gerem valor de verdade
          </p>
          <p className="text-white">
            Minha experiência profissional em áreas administrativas contribuiu para desenvolver minha
            organização, visão de processos e capacidade de encontrar soluções.
          </p>
          <p className="text-white">
            Nas minhas horas vagas gosto de assistir filmes e series, estar com minha família e praticar esportes.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-9 gap-4 w-full relative top-15">
          <div className="flex flex-col justify-center items-center p-3 border border-[#1f8bfa] rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#1f8bfa] hover:bg-[#1f8bfa]/10">
            <HiOutlineLightBulb size="2rem" color="#1f8bfa" />
            <p className="text-white text-center mt-2">Aprendizado Continuo</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3 border border-[#1f8bfa] rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#1f8bfa] hover:bg-[#1f8bfa]/10">
            <FaLayerGroup size="2rem" color="#1f8bfa" />
            <p className="text-white text-center mt-2">Boas Praticas</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3 border border-[#1f8bfa] rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#1f8bfa] hover:bg-[#1f8bfa]/10">
            <GrGroup size="2rem" color="#1f8bfa" />
            <p className="text-white text-center mt-2">Trabalho em equipe</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3 border border-[#1f8bfa] rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#1f8bfa] hover:bg-[#1f8bfa]/10">
            <MdRocketLaunch size="2rem" color="#1f8bfa" />
            <p className="text-white text-center mt-2">Foco em resultados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// import image from "../../assets/fullstack_portfolio_portrait_prata_sapato_social.png";

// const qualities = [
//   "Aprendizado contínuo",
//   "Boas práticas",
//   "Trabalho em equipe",
//   "Foco em resultados",
// ];

// export const Sobre = () => {
//   return (
//     <section
//       id="sobre"
//       className="min-h-screen w-full overflow-hidden bg-[#080b12] px-6 py-16 text-white sm:px-10 lg:px-20"
//     >
//       <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
//         {/* Imagem */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101620] p-3 shadow-2xl shadow-black/40">
//             <img
//               src={image}
//               alt="Windson Amorim"
//               className="h-[480px] w-[340px] rounded-xl object-cover object-top sm:h-[560px] sm:w-[400px]"
//             />
//           </div>
//         </div>

//         {/* Conteúdo */}
//         <div className="w-full max-w-3xl">
//           <h1 className="text-5xl font-bold leading-none sm:text-6xl">
//             Windson
//           </h1>

//           <h2 className="mt-2 text-4xl font-bold text-[#1f8bfa] sm:text-5xl">
//             Amorim
//           </h2>

//           <p className="mt-5 text-sm uppercase tracking-wider text-slate-400 sm:text-base">
//             Desenvolvedor Full Stack | Estudante de Desenvolvimento de Sistemas
//           </p>

//           <div className="my-8 h-px w-16 bg-[#1f8bfa]" />

//           <div className="space-y-5 text-base leading-7 text-slate-300">
//             <p>
//               Estou em transição para a área de tecnologia, com foco em
//               desenvolvimento Full Stack.
//             </p>

//             <p>
//               Atualmente trabalho com React, Next.js, TypeScript, Node.js e
//               bancos de dados, buscando transformar problemas reais em soluções
//               simples, funcionais e bem estruturadas.
//             </p>

//             <p>
//               Tenho interesse especial em APIs, arquitetura de aplicações e
//               desenvolvimento de sistemas. Gosto de aprender, resolver
//               problemas, melhorar processos e construir projetos que gerem valor
//               de verdade.
//             </p>
//           </div>

//           {/* Cards de qualidades */}
//           <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {qualities.map((quality) => (
//               <div
//                 key={quality}
//                 className="flex min-h-28 items-center justify-center rounded-2xl border border-[#1f8bfa]/60 bg-[#101620] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#1f8bfa] hover:bg-[#1f8bfa]/10"
//               >
//                 <p className="text-sm font-medium text-slate-200">{quality}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };