import { Card } from "../../components/shared/Card";
import { TechnologiesBio } from "./TechnologiesBio";
import { TechnologiesHighlights } from "./TechnologiesHighlights";
import { FaGraduationCap } from "../../components/ui/icons";
import { FaLaptop } from "react-icons/fa";

export const Technologies: React.FC = () => {
  return (
    <section
      id="tecnologias"
      className="relative z-10 py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) flex items-center gap-2">
          Tecnologias
        </h2>
        <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-2">
        <div className="lg:col-span-7">
          <TechnologiesBio />
          <Card icon={FaGraduationCap}>
            <span className={`block text-xs text-text`}>Formação</span>
            <span className={`text-sm font-semibold text-muted-foreground`}>
              Análise
            </span>
          </Card>
          <Card icon={FaLaptop}>
            <span className={`block text-xs text-text`}>
              Desenvolvimento Web
            </span>
            <span className={`text-sm font-semibold text-muted-foreground`}>
              Interfaces modernas, escaláveis e com foco na experiência do
              usuário.
            </span>
          </Card>
          <Card icon={FaGraduationCap}>
            <span className={`block text-xs text-text`}>Formação</span>
            <span className={`text-sm font-semibold text-muted-foreground`}>
              Análise
            </span>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <TechnologiesHighlights />
        </div>
      </div>
    </section>
  );
};
