import { Sun, Moon } from "lucide-react";
import useTheme from "@/app/hooks/useTheme/useTheme";

function ThemeController() {
  const { isDarkTheme, handleThemeToggle } = useTheme();

  return (
    <div>
      <label className="swap swap-rotate">
        {/* Checkbox controla o estado do tema */}
        <input
          type="checkbox"
          className="theme-controller"
          checked={isDarkTheme}
          onChange={handleThemeToggle}
        />
        <Sun className="swap-off" size={28} />
        <Moon className="swap-on" size={28} />
      </label>
    </div>
  );
}

export default ThemeController;