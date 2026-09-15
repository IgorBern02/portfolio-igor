import { Card } from "../../components/shared/Card";
import { TechnologiesBio } from "./TechnologiesBio";
import { TechnologiesHighlights } from "./TechnologiesHighlights";
import { cardsData } from "./cardsData";

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
        <div className="lg:col-span-7 ">
          <TechnologiesBio />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {cardsData.map((card, index) => (
              <Card key={index} icon={card.icon}>
                <span className={"block text-xs text-text"}>{card.text}</span>
                <span className={"text-sm font-semibold text-muted-foreground"}>
                  {card.description}
                </span>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <TechnologiesHighlights />
        </div>
      </div>
    </section>
  );
};
