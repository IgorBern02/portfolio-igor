// projectsData.ts
import taskFlowImage from "../../assets/projects/taskflowpro.png";
// import devEventsImage from '../../assets/projects/dev-events.png';
// import planejAiImage from '../../assets/projects/planejai.png';

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  linkProject: string;
  linkSource: string;
}

export const projectsList: ProjectItem[] = [
  {
    title: "DevEvents",
    description:
      "Plataforma para desenvolvedores encontrarem e divulgarem eventos de tecnologia, com busca, filtros, aprovação administrativa e gerenciamento de eventos.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: taskFlowImage, // Substitua pela imagem correta quando descomentar
    linkProject: "SEU_LINK_AQUI",
    linkSource: "SEU_GITHUB_AQUI",
  },
  {
    title: "TaskFlowPro",
    description:
      "Aplicação de gerenciamento de projetos e tarefas, com autenticação, organização de projetos e tarefas e comunicação entre frontend e backend.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "Express",
      "JWT",
    ],
    image: taskFlowImage,
    linkProject: "https://taskflowpro-nine.vercel.app/",
    linkSource: "https://github.com/IgorBern02/taskflowpro",
  },
  {
    title: "PlanejAI",
    description:
      "Aplicação desenvolvida em um desafio da DIO, com geração de simulações, histórico salvo localmente e integração com inteligência artificial.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Gemini API",
      "LocalStorage",
    ],
    image: taskFlowImage, // Substitua pela imagem correta quando descomentar
    linkProject: "SEU_LINK_AQUI",
    linkSource: "SEU_GITHUB_AQUI",
  },
];
