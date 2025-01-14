import type { Metadata } from "next";
import LayoutSwitcher from "../components/LayoutSwitcher/Layoutswitcher";
import DashboardSidebar from "./components/Sidebar/Sidebar";

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-5 gap-3 bg-violet-100">
      <div>
        <DashboardSidebar />
      </div>
      <div className="col-span-4">
        {/* Usa o LayoutSwitcher para gerenciar o layout com base na rota */}
        <LayoutSwitcher>{children}</LayoutSwitcher>
      </div>
    </main>
  );
}