import { CardProjects } from "../../components/cardProjects";
import projetoPrestacaoFront from "../../assets/projetoPrestacao.png";
import projetoPrestacaoBack from "../../assets/projetoPrestacaoBack.png";


export const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 p-4">
      <CardProjects
        title="Dashboard de Gestão Financeira - Frontend"
        description="Interface administrativa moderna focada na visualização inteligente de dados financeiros. O sistema transforma fluxos complexos de prestação de contas em dashboards interativos, permitindo o acompanhamento em tempo real do planejamento versus executado com animações fluidas e alta performance."
        imageUrl={projetoPrestacaoFront}
        tags={["React", "Next.js", "Material UI", "Zustand", "Recharts"]}
        link="https://gestao-prestacao-front.vercel.app/dashboard"
      />
      <CardProjects
        title="API de Gestão e Prestação de Contas"
        description="API REST de alta performance desenvolvida para centralizar a prestação de contas e dar suporte a tomadas de decisão baseadas em dados (SMS). Implementada com arquitetura escalável, validação rigorosa de dados e documentação automatizada para garantir a integridade dos fluxos financeiros."
        imageUrl={projetoPrestacaoBack}
        tags={[
          "Node.js",
          "Fastify",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL",
          "Zod",
        ]}
        link="https://gestaoprestacaoapi-production.up.railway.app/docs/#tag/orcado"
      />
      <CardProjects
        title="Dashboard de Gestão Financeira - Frontend"
        description="Interface administrativa moderna focada na visualização inteligente de dados financeiros. O sistema transforma fluxos complexos de prestação de contas em dashboards interativos, permitindo o acompanhamento em tempo real do planejamento versus executado com animações fluidas e alta performance."
        imageUrl={projetoPrestacaoFront}
        tags={["React", "Next.js", "Material UI", "Zustand", "Recharts"]}
        link="https://gestaoprestacaoapi-production.up.railway.app/docs/#tag/orcado"
      />
      <CardProjects
        title="API de Gestão e Prestação de Contas"
        description="API REST de alta performance desenvolvida para centralizar a prestação de contas e dar suporte a tomadas de decisão baseadas em dados (SMS). Implementada com arquitetura escalável, validação rigorosa de dados e documentação automatizada para garantir a integridade dos fluxos financeiros."
        imageUrl={projetoPrestacaoBack}
        tags={[
          "Node.js",
          "Fastify",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL",
          "Zod",
        ]}
        link="https://gestaoprestacaoapi-production.up.railway.app/docs/#tag/orcado"
      />
      <CardProjects
        title="Dashboard de Gestão Financeira - Frontend"
        description="Interface administrativa moderna focada na visualização inteligente de dados financeiros. O sistema transforma fluxos complexos de prestação de contas em dashboards interativos, permitindo o acompanhamento em tempo real do planejamento versus executado com animações fluidas e alta performance."
        imageUrl={projetoPrestacaoFront}
        tags={["React", "Next.js", "Material UI", "Zustand", "Recharts"]}
        link="https://gestaoprestacaoapi-production.up.railway.app/docs/#tag/orcado"
      />
      <CardProjects
        title="API de Gestão e Prestação de Contas"
        description="API REST de alta performance desenvolvida para centralizar a prestação de contas e dar suporte a tomadas de decisão baseadas em dados (SMS). Implementada com arquitetura escalável, validação rigorosa de dados e documentação automatizada para garantir a integridade dos fluxos financeiros."
        imageUrl={projetoPrestacaoBack}
        tags={[
          "Node.js",
          "Fastify",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL",
          "Zod",
        ]}
        link="https://gestaoprestacaoapi-production.up.railway.app/docs/#tag/orcado"
      />
    </div>
  );
};
