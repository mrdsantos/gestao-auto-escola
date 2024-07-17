import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const quicksand = Quicksand ({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Gestão Auto Escola | %s",
    default: "Gestão Auto Escola"
  },
  description: "A gestão que sua auto escola precisa. Um sistema completo com site institucional e área administrativa para sua auto escola",
  authors: [{ name: 'Maicon Rodrigues dos Santos', url: 'https://www.linkedin.com/in/maiconrdsantos/' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="gestao">
      <body className={quicksand.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}