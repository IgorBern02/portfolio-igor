import { FaCheckCircle, FaRocket } from "../../components/ui/icons";
import { highlights } from "./Highlights";

export function AboutHighlights() {
  return (
    <div className="bg-(--highlight-bg) border border-(--highlight-border) p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
        <FaRocket className="w-5 h-5 text-purple-400" />O que eu faço
      </h3>
      <ul className="space-y-3">
        {highlights.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <FaCheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
