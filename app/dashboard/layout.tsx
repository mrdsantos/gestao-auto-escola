import type { Metadata } from "next";
import LayoutSwitcher from "../components/LayoutSwitcher/Layoutswitcher";
import DashboardSidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import { Roboto } from "next/font/google";

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

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${roboto.className} grid grid-cols-4 lg:grid-cols-5 gap-3 bg-violet-100`}>
      <div>
        <DashboardSidebar />
      </div>
      <div className="col-span-3 lg:col-span-4 py-4">
        <DashboardHeader />
        {/* Usa o LayoutSwitcher para gerenciar o layout com base na rota */}
        <div className="p-6">
          <LayoutSwitcher>{children}</LayoutSwitcher>
        </div>
      </div>
    </main>
  );
}