import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaGitAlt,
  FaGithub,
  RiTailwindCssFill,
  SiMongodb,
  BsTypescript,
  FaLaptopCode,
  CiDatabase,
  FaTools,
} from "../../components/ui/icons";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  icon: React.ReactNode;
  title: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <BsTypescript /> },
      { name: "JavaScript", icon: <span>JS</span> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Sass", icon: <span>S</span> },
      { name: "Bootstrap", icon: <span>B</span> },
      { name: "Vite", icon: <span>V</span> },
      { name: "Figma", icon: <span>F</span> },
    ],
  },
  {
    icon: <CiDatabase />,
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express", icon: <span>ex</span> },
      { name: "REST API", icon: <span>☁</span> },
      { name: "JWT", icon: <span>◆</span> },
      { name: "MySQL", icon: <span>DB</span> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    icon: <FaTools />,
    title: "Ferramentas",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <span>VS</span> },
      { name: "Postman", icon: <span>➤</span> },
      { name: "Figma", icon: <span>F</span> },
    ],
  },
];

const TechnologyPill = ({ item }: { item: TechItem }) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-2
        py-1
        rounded-full
        border
        border-(--highlight-border)
        bg-(--background)
        text-(--foreground)
        transition-all
        duration-200
        hover:border-(--primary)
        hover:bg-(--primary)/10
        hover:-translate-y-0.5
        whitespace-nowrap
      "
    >
      <span className="flex items-center text-(--primary) text-lg">
        {item.icon}
      </span>

      <span className="text-[12px] text-(--foreground)">{item.name}</span>
    </div>
  );
};

const CategoryHeader = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-(--primary) text-xl">{icon}</span>

      <h3 className="text-md font-semibold text-(--foreground)">{title}</h3>
    </div>
  );
};

export const TechnologiesHighlights: React.FC = () => {
  const frontend = techCategories[0];
  const backend = techCategories[1];
  const tools = techCategories[2];

  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-(--highlight-border)
        bg-(--highlight-bg)
        p-6
        shadow-[0_0_40px_rgba(146,92,240,0.05)]
      "
    >
      {/* Frontend + Backend */}
      <div className="flex flex-col gap-2">
        {/* Frontend */}
        <div className="">
          <CategoryHeader icon={frontend.icon} title={frontend.title} />

          <div className="flex flex-wrap gap-3">
            {frontend.items.map((item) => (
              <TechnologyPill key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="my-7 h-px w-full bg-(--highlight-border)" />

        {/* Divider + Backend */}
        <div>
          <CategoryHeader icon={backend.icon} title={backend.title} />

          <div className="flex flex-wrap gap-3">
            {backend.items.map((item) => (
              <TechnologyPill key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="my-7 h-px w-full bg-(--highlight-border)" />

      {/* Tools */}
      <div>
        <CategoryHeader icon={tools.icon} title={tools.title} />

        <div className="flex flex-wrap gap-3">
          {tools.items.map((item) => (
            <TechnologyPill key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
