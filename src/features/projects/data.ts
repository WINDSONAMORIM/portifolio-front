import projetoPrestacaoFront from "../../assets/projetoPrestacao.png";
import projetoPrestacaoBack from "../../assets/projetoPrestacaoBack.png";
import projetoCSVtoAPI from "../../assets/projetoCsvToAPI.png";
import projetoDragonBall from "../../assets/projetoDragonBall.png";

export const projects = [
  {
    title: "Dashboard de Gestão Financeira - Frontend",
    description: "Interface administrativa moderna focada na visualização inteligente de dados financeiros. O sistema transforma fluxos complexos de prestação de contas em dashboards interativos, permitindo o acompanhamento em tempo real do planejamento versus executado com animações fluidas e alta performance.",
    imageUrl: projetoPrestacaoFront,
    tags: ["React", "Next.js", "Material UI", "Zustand", "Recharts"],
    link: "https://gestao-prestacao-front.vercel.app/dashboard",
    githubLink: "https://github.com/WINDSONAMORIM/gestao_prestacao_front",
  },

  {
    title: "API de Gestão e Prestação de Contas",
    description: "API REST de alta performance desenvolvida para centralizar a prestação de contas e dar suporte a tomadas de decisão baseadas em dados (SMS). Implementada com arquitetura escalável, validação rigorosa de dados e documentação automatizada para garantir a integridade dos fluxos financeiros.",
    imageUrl: projetoPrestacaoBack,
    tags: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Zod",
    ],
    link: "https://gestao-prestacao-api.onrender.com/docs",
    githubLink: "https://github.com/WINDSONAMORIM/gestao_prestacao_api",
  },

  {
    title: "CSV to API",
    description: "Ferramenta de ingestão de dados que processa arquivos CSV e envia registros para APIs REST de forma automatizada. O projeto inclui parsing de formatos brasileiros (datas e decimais), validação de dados com Pydantic, tratamento robusto de erros, retries com backoff exponencial e configuração via variáveis de ambiente",
    imageUrl: projetoCSVtoAPI,
    tags: ["Python", "Pydantic", "REST API", "ETL"],
    link: "",
    githubLink: "https://github.com/WINDSONAMORIM/csv_to_api",
  },

  {
    title: "Conferência Automatizada de Processos",
    description: "Ferramenta desenvolvida em Python para automatizar a conferência de processos de prestação de contas. O sistema processa documentos PDF e XML, extrai informações utilizando expressões regulares, realiza validações cruzadas entre notas fiscais, pedidos de compra e comprovantes de pagamento, identificando divergências automaticamente e reduzindo o trabalho manual de auditoria.",
    imageUrl: projetoCSVtoAPI,
    tags: ["Python", "Regex", "XML", "PyPDF2"],
    link: "",
    githubLink: "https://github.com/WINDSONAMORIM/Conferencia-Processos",
  },

  {
    title: "Dragon Ball",
    description: " Aplicação consumindo API do Dragon Ball que exibi personagens, transformações e níveis de poder. O projeto implementa paginação completa, modal dinâmico com informações detalhadas e troca de imagem ao clicar nas transformações, e tratamento de texto longo com truncagem. Desenvolvido com HTML, CSS e JavaScript puro, sem frameworks — demonstrando domínio de manipulação DOM, async/await e grid/flexbox.",
    imageUrl: projetoDragonBall,
    tags: ["API", "DOM", "Async/Await", "Paginação"],
    link: "https://windsonamorim.github.io/DragonBall/",
    githubLink: "https://github.com/WINDSONAMORIM/DragonBall",
  },
];