import { Header } from "./Header";
import { ContactIntro } from "./ContactIntro";
import { ContactLinks } from "./ContactLinks";

export const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="
        relative
        z-10
        mx-auto
        max-w-6xl
        px-4
        py-20
      "
    >
      {/* Header */}
      <Header
        title="Contato"
        subtitle=" Tem um projeto em mente ou quer conversar sobre uma oportunidade? Entre
        em contato comigo."
      />

      {/* Card */}
      <div
        className="
          grid
          grid-cols-1
          gap-10
          rounded-2xl
          border
          border-(--highlight-border)
          bg-(--highlight-bg)
          p-6
          md:p-8
          lg:grid-cols-2
        "
      >
        {/* Esquerda */}
        <ContactIntro />

        {/* Direita */}
        <ContactLinks />
      </div>
    </section>
  );
};
