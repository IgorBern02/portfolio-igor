import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import { Button } from "../../shared/Button";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-(--border) px-6 py-3">
      <nav>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">IB</h1>
          </div>

          <div>
            <HeaderNav />
          </div>

          <div>
            <Button
              aria-label={`Mudar para tema ${theme === "light" ? "escuro" : "claro"}`}
              variant="ghost"
              icon={theme === "light" ? Moon : Sun}
              onClick={toggleTheme}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
