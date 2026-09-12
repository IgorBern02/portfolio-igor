import { Bio } from "../../components/shared/Bio";
import { FaCode } from "../../components/ui/icons";

export const TechnologiesBio: React.FC = () => {
  return (
    <Bio className="lg:col-span-6">
      <div className="flex items-center mb-4 text-center gap-3">
        <FaCode className="w-6 h-6 text-purple-400 mb-2" />
        <h3 className="text-xl font-semibold text-(--foreground)">
          Minhas principais{" "}
          <strong className="text-purple-400">tecnologias</strong>
        </h3>
      </div>
      <p>
        Tenho experiência com as tecnologias que utilizo no meu dia a dia para
        desenvolver interfacer modernas, escaláveis e com foco na experiência do
        usuário.
      </p>
      <p>
        Estou sempre estudando e buscando evoluir, principalmente em{" "}
        <strong className="text-purple-400">TypeScript</strong>,{" "}
        <strong className="text-purple-400">React</strong> e no ecossistema
        <strong className="text-purple-400"> Node.js</strong>, enquanto continuo
        explorando novas ferramentas e boas práticas de desenvolvimento.
      </p>
    </Bio>
  );
};
