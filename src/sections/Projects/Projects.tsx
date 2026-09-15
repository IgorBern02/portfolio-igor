import React from "react";
import { CardProjects } from "./CardProjects";
import { projectsList } from "./projectsData"; // Importando os dados

export const Projects: React.FC = () => {
  return (
    <section
      id="projetos"
      className="relative z-10 mx-auto max-w-6xl px-4 py-20"
    >
      {/* Título */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-(--foreground) md:text-4xl">
          Projetos
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-(--primary)" />
        <p className="mt-5 max-w-2xl text-sm leading-6 text-(--muted-foreground) md:text-base">
          Alguns dos projetos que desenvolvi durante minha jornada, explorando
          diferentes tecnologias e boas práticas de desenvolvimento.
        </p>
      </div>

      {/* Grid de Projetos Componentizado */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projectsList.map((project, index) => (
          <CardProjects
            key={index} // Ideal usar um id único se tiver, senão o index resolve aqui
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            linkProject={project.linkProject}
            linkSource={project.linkSource}
          />
        ))}
      </div>
    </section>
  );
};
