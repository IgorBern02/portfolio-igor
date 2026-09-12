const techs = ["React", "Node.js", "Tailwind CSS", "TypeScript", "MongoDB"];

export function TechList() {
  return (
    <ul className="flex flex-wrap items-center gap-4 text-muted-foreground">
      {techs.map((tech) => (
        <li key={tech} className="flex items-center gap-2">
          <span>{tech}</span>
        </li>
      ))}
    </ul>
  );
}
