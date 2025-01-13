import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "./components/ThemeInitializer/ThemeInitializer";
import LayoutSwitcher from "./components/LayoutSwitcher/Layoutswitcher";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Gestão Auto Escola | %s",
    default: "Gestão Auto Escola",
  },
  description:
    "A gestão que sua auto escola precisa. Um sistema completo com site institucional e área administrativa para sua auto escola",
  authors: [
    {
      name: "Maicon Rodrigues dos Santos",
      url: "https://www.linkedin.com/in/maiconrdsantos/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${quicksand.className}`}>
        <ThemeInitializer />
        {/* Usa o LayoutSwitcher para gerenciar o layout com base na rota */}
        <LayoutSwitcher>{children}</LayoutSwitcher>
      </body>
    </html>
  );
}
