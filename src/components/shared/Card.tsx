import type { IconType } from "react-icons/lib";

interface CardProps {
  icon: IconType;
  children?: React.ReactNode;
}

export function Card({ icon: Icon, children }: CardProps) {
  return (
    <div className="bg-card border border-border p-4 rounded-xl text-center">
      <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
      {children}
    </div>
  );
}
