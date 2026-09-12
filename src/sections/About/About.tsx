import { FaGraduationCap } from "../../components/ui/icons";
import { Card } from "../../components/shared/Card";

import { AboutHighlights } from "./AboutHighlights";

import { BioAbout } from "./AboutBio";

export function About() {
  return (
    <section id="sobre" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) flex items-center gap-2">
          Sobre <span className=" text-(--primary)">Mim</span>
        </h2>
        <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-2">
        <BioAbout />

        <div className="lg:col-span-5 space-y-4">
          <AboutHighlights />

          <div className="grid grid-cols-2 gap-4">
            <Card icon={FaGraduationCap}>
              <span className={`block text-xs text-muted-foreground`}>
                Formação
              </span>
              <span className={`text-sm font-semibold text-text`}>Análise</span>
            </Card>
            <Card icon={FaGraduationCap}>
              <span className={`block text-xs text-muted-foreground`}>
                Foco Atual
              </span>
              <span className={`text-sm font-semibold text-text`}>
                React & Node.js
              </span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
