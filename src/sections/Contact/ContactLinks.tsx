import { contactItems } from "./contactData";
import { GoArrowUpRight } from "../../components/ui/icons";

export const ContactLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {contactItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              item.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-(--highlight-border)
                          bg-(--background)
                          p-4
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-(--primary)
                          hover:bg-(--primary)/5
                        "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-lg
                              bg-(--primary)/10
                              text-(--primary)
                            "
              >
                <Icon size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-(--foreground)">
                  {item.title}
                </p>

                <p className="mt-0.5 text-xs text-(--muted-foreground)">
                  {item.value}
                </p>
              </div>
            </div>

            <GoArrowUpRight
              size={18}
              className="
                            text-(--muted-foreground)
                            transition-all
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-(--primary)
                          "
            />
          </a>
        );
      })}
    </div>
  );
};
