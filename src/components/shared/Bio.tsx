interface BioProps {
  children?: React.ReactNode;
  className?: string;
}

export function Bio({ children, className = "lg:col-span-7" }: BioProps) {
  return (
    <div
      className={`h-full ${className} space-y-4 text-muted-foreground leading-relaxed bg-card p-6 md:p-8 rounded-2xl border border-border backdrop-blur-sm`}
    >
      {children}
    </div>
  );
}
