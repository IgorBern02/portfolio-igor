import { FaGithub, FaExternalLinkAlt } from "../../components/ui/icons";

interface CardProjectsProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  linkProject?: string;
  linkSource?: string;
}

export const CardProjects: React.FC<CardProjectsProps> = ({
  title,
  description,
  technologies,
  image,
  linkProject,
  linkSource,
}) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-(--highlight-border)
        bg-(--highlight-bg)
        transition-all duration-300
        hover:-translate-y-2
        hover:border-(--primary)
        hover:shadow-[0_15px_50px_rgba(146,92,240,0.12)]
      "
    >
      {/* Imagem */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`Preview do projeto ${title}`}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        <h3
          className="
            absolute
            bottom-5
            left-5
            text-xl
            font-bold
            text-white
          "
        >
          {title}
        </h3>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <p className="text-sm leading-6 text-(--muted-foreground)">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-(--highlight-border)
                bg-(--background)
                px-3 py-1
                text-xs
                font-medium
                text-(--foreground)
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-3">
          {linkProject && (
            <a
              href={linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-(--primary)
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:opacity-90
                hover:-translate-y-0.5
              "
            >
              <FaExternalLinkAlt size={17} />
              Ver projeto
            </a>
          )}

          {linkSource && (
            <a
              href={linkSource}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-(--highlight-border)
                bg-(--background)
                px-4
                py-3
                text-sm
                font-medium
                text-(--foreground)
                transition-all
                hover:border-(--primary)
                hover:text-(--primary)
                hover:-translate-y-0.5
              "
            >
              <FaGithub size={17} />
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
