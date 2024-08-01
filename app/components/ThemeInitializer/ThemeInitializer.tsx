"use client"
import { useEffect } from "react";

function ThemeInitializer() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDarkScheme ? "dark" : "light");

    // Adiciona um estilo inline para aplicar o tema antes da renderização
    const styleElement = document.createElement("style");
    styleElement.textContent = `:root { --theme: ${theme}; }`;
    document.head.appendChild(styleElement);

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return null;
}

export default ThemeInitializer;