import projetoPrestacaoBack from "../../assets/projetoPrestacaoBack.png";
import projetoCSVtoAPI from "../../assets/projetoCsvToAPI.png";
import {
  projetoDragonBall,
  projetoGestaoPrestacaoFront,
  projetoGTA,
} from "../../assets/imagensProjetos";

export const projects = [
  {
    title: "Dashboard de Gestão Financeira - Frontend",
    description:
      "Interface administrativa moderna focada na visualização inteligente de dados financeiros. O sistema transforma fluxos complexos de prestação de contas em dashboards interativos, permitindo o acompanhamento em tempo real do planejamento versus executado com animações fluidas e alta performance.",
    imageUrl: projetoGestaoPrestacaoFront.capa,
    prints: projetoGestaoPrestacaoFront.prints,
    tags: ["React", "Next.js", "Material UI", "Zustand", "Recharts"],
    link: "https://gestao-prestacao-front.vercel.app/dashboard",
    githubLink: "https://github.com/WINDSONAMORIM/gestao_prestacao_front",
  },

  {
    title: "API de Gestão e Prestação de Contas",
    description:
      "API REST de alta performance desenvolvida para centralizar a prestação de contas e apoiar a tomada de decisões de decisão baseadas em dados (SMS). Implementada com arquitetura escalável, validação rigorosa de dados e documentação automatizada para garantir a integridade dos fluxos financeiros.",
    imageUrl: projetoPrestacaoBack,
    prints: [],
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
    description:
      "Ferramenta de ingestão de dados que processa arquivos CSV e envia registros para APIs REST de forma automatizada. O projeto inclui parsing de formatos brasileiros (datas e decimais), validação de dados com Pydantic, tratamento robusto de erros, retries com backoff exponencial e configuração por meio de variáveis de ambiente",
    imageUrl: projetoCSVtoAPI,
    prints: [],
    tags: ["Python", "Pydantic", "REST API", "ETL"],
    link: "",
    githubLink: "https://github.com/WINDSONAMORIM/csv_to_api",
  },

  {
    title: "Conferência Automatizada de Processos",
    description:
      "Ferramenta desenvolvida em Python para automatizar a conferência de processos de prestação de contas. O sistema processa documentos PDF e XML, extrai informações utilizando expressões regulares, realiza validações cruzadas entre notas fiscais, pedidos de compra e comprovantes de pagamento, identificando divergências automaticamente e reduzindo o trabalho manual de auditoria.",
    imageUrl: projetoCSVtoAPI,
    prints: [],
    tags: ["Python", "Regex", "XML", "PyPDF2"],
    link: "",
    githubLink: "https://github.com/WINDSONAMORIM/Conferencia-Processos",
  },

  {
    title: "Dragon Ball",
    description:
      " Essa Aplicação consome a API do Dragon Ball que exibe personagens, transformações e níveis de poder. O projeto implementa paginação completa, modal dinâmico com informações detalhadas e troca de imagem ao clicar nas transformações, e tratamento de texto longo com truncagem. Desenvolvido com HTML, CSS e JavaScript puro, sem frameworks — demonstrando domínio da manipulação da DOM, async/await e grid/flexbox.",
    imageUrl: projetoDragonBall.capa,
    prints: projetoDragonBall.prints,
    tags: ["API", "DOM", "Async/Await", "Paginação"],
    link: "https://windsonamorim.github.io/DragonBall/",
    githubLink: "https://github.com/WINDSONAMORIM/DragonBall",
  },
  {
    title: "GTA – Gerador de Personagens com IA",
    description:
      "Aplicação interativa inspirada em GTA, desenvolvida com HTML, CSS e JavaScript puro. Integra Inteligência Artificial generativa por meio do Puter.js, permitindo que usuários enviem suas próprias fotos e criem personagens personalizados no estilo do jogo, com remoção de fundo. Implementa upload de imagens, integração com modelos de IA, manipulação dinâmica do DOM e seleção interativa de personagens.",
    imageUrl: projetoGTA.capa,
    prints: projetoGTA.prints,
    tags: [
      "JavaScript",
      "IA Generativa",
      "Puter.js",
      "Image Generation",
      "DOM",
      "Async/Await",
    ],
    link: "https://windsonamorim.github.io/gta/",
    githubLink: "https://github.com/WINDSONAMORIM/gta",
  },
];