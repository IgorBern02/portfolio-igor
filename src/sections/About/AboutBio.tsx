import { Bio } from "../../components/shared/Bio";

export const BioAbout: React.FC = () => {
  return (
    <Bio>
      <p>
        Olá! Sou um{" "}
        <strong className="text-(--foreground)">
          Desenvolvedor Full Stack Junior
        </strong>{" "}
        apaixonado por criar experiências digitais fluidas, intuitivas e bem
        estruturadas.
      </p>
      <p>
        Com formação técnica em{" "}
        <strong className="text-purple-400">
          Análise e Desenvolvimento de Sistemas
        </strong>
        , venho construindo aplicações reais utilizando o ecossistema{" "}
        <strong className="text-(--foreground)">
          React, TypeScript e Node.js
        </strong>
        .
      </p>
      <p>
        Minha atuação envolve desde a criação de interfaces modernas, acessíveis
        e responsivas até a construção de APIs sólidas e integração com bancos
        de dados. Atualmente, busco minha primeira oportunidade formal em
        empresa para somar ao time e continuar evoluindo.
      </p>
    </Bio>
  );
};
