import { CiMail, CiMapPin } from "../../components/ui/icons";

export const ContactIntro: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <span
        className="
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--primary)/10
                      text-(--primary)
                    "
      >
        <CiMail size={24} />
      </span>

      <h3
        className="
                      text-2xl
                      font-bold
                      text-(--foreground)
                    "
      >
        Vamos conversar?
      </h3>

      <p
        className="
                      mt-3
                      max-w-md
                      text-sm
                      leading-6
                      text-(--muted-foreground)
                    "
      >
        Estou aberto a oportunidades profissionais, projetos freelance e novas
        conexões na área de tecnologia.
      </p>

      {/* Localização */}
      <div
        className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-(--muted-foreground)
                    "
      >
        <CiMapPin size={18} className="text-(--primary)" />

        <span>Praia Grande, SP</span>
      </div>
    </div>
  );
};
