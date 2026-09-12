const linksNav = [
  {
    name: "Sobre",
    href: "#sobre",
  },
  {
    name: "Tecnologias",
    href: "#tecnologias",
  },
  {
    name: "Projetos",
    href: "#projetos",
  },
  {
    name: "Contato",
    href: "#contato",
  },
];

export const HeaderNav = () => {
  return (
    <ul className="flex items-center justify-center gap-10">
      {linksNav.map((link) => {
        const isActive = location.pathname === link.href;
        return (
          <li
            key={link.name}
            id={link.href}
            className={`px-5 py-2 cursor-pointer transition-colors ease-in-out duration-200 rounded-2xl ${
              isActive
                ? "bg-(--primary) text-(--primary-foreground) font-medium"
                : "hover:bg-(--primary) hover:text-(--primary-foreground)"
            }`}
            aria-label={link.name}
            aria-current={isActive ? "page" : undefined}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
