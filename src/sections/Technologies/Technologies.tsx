import { Card } from "../../components/shared/Card";
import { TechnologiesBio } from "./TechnologiesBio";
import { TechnologiesHighlights } from "./TechnologiesHighlights";
import {
  CiDatabase,
  FaLaptopCode,
  FaTools,
  FaFigma,
} from "../../components/ui/icons";

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
          <Card icon={FaLaptopCode}>
            <span className={"block text-xs text-text"}>
              Desenvolvimento Web
            </span>
            <span className={"text-sm font-semibold text-muted-foreground"}>
              Interfaces modernas, escaláveis e com foco na experiência do
              usuário.
            </span>
          </Card>
          <Card icon={CiDatabase}>
            <span className={"block text-xs text-text"}>APIs e Backend</span>
            <span className={"text-sm font-semibold text-muted-foreground"}>
              Integrações e consumo de APIs, com Node.js, Express e bancos de
              dados.
            </span>
          </Card>
          <Card icon={FaTools}>
            <span className={"block text-xs text-text"}>Versionamento</span>
            <span className={"text-sm font-semibold text-muted-foreground"}>
              Controle de versão com Git, colaboração e organização com Git e
              GitHub.
            </span>
          </Card>
          <Card icon={FaFigma}>
            <span className={"block text-xs text-text"}>
              Design e Prototipação
            </span>
            <span className={"text-sm font-semibold text-muted-foreground"}>
              Criação de interfaces e protótipos com Figma, explorando design de
              interação e experiência do usuário.
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
