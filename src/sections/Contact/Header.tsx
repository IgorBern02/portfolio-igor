export const Header: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2
        className="
            text-3xl
            font-bold
            text-(--foreground)
            md:text-4xl
          "
      >
        {title}
      </h2>

      <div className="mt-2 h-1 w-16 rounded-full bg-(--primary)" />

      <p
        className="
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-(--muted-foreground)
            md:text-base
          "
      >
        {subtitle}
      </p>
    </div>
  );
};
