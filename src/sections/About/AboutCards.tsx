import { Card } from "../../components/shared/Card";
import { FaGraduationCap } from "../../components/ui/icons";

export const AboutCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card icon={FaGraduationCap}>
        <span className={`block text-xs text-muted-foreground`}>Formação</span>
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
  );
};
