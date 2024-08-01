import { useEffect, useState } from "react";

function useTheme() {
  // Estado para controlar o tema
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    // Verifica a preferência do usuário armazenada
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Verifica a preferência do sistema se não houver preferência armazenada
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkTheme(prefersDarkScheme);
      document.documentElement.setAttribute("data-theme", prefersDarkScheme ? "dark" : "light");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { isDarkTheme, handleThemeToggle };
}

export default useTheme;