import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-br">
      <body className={inter.className}>
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}