"use client"

import Link from "next/link";
import { LayoutDashboard, CalendarDays, Users, MessageSquareShare } from "lucide-react";
import { usePathname } from "next/navigation";

function DashboardNavBar() {
    const pathName = usePathname();

    return (
        <div>
            <nav className="navbar m-0 p-0 ">
                <ul className="flex flex-col w-full gap-y-4">
                    {/* Link para o Dashboard */}
                    <Link
                        href="/dashboard"
                        onClick={(e) => e.currentTarget.blur()}
                        className={`btn bg-zinc-50 border-none shadow-none w-full flex items-center justify-start text-lg hover:bg-gradient-to-tl focus:outline-none focus:ring-4
                            ${pathName === "/dashboard"
                                ? "bg-gradient-to-br from-purple-900 to-indigo-700 text-white"
                                : "text-gray-400 bg-gradient-to-br hover:text-indigo-800 hover:bg-zinc-50"}`}
                    >
                        <LayoutDashboard className="hidden lg:block"/>
                        Dashboard
                    </Link>
                    {/* Link para o Cadastro */}
                    <Link
                        href="/dashboard/cadastro"
                        onClick={(e) => e.currentTarget.blur()}
                        className={`btn bg-zinc-50 border-none shadow-none w-full flex items-center justify-start text-lg hover:bg-gradient-to-tl focus:outline-none focus:ring-4
                            ${pathName === "/dashboard/cadastro"
                                ? "bg-gradient-to-br from-purple-900 to-indigo-700 text-white"
                                : "text-gray-400 bg-gradient-to-br hover:text-indigo-800 hover:bg-zinc-50"}`}
                    >
                        <Users className="hidden lg:block"/>
                        Pessoas
                    </Link>
                    {/* Link para a Agenda */}
                    <Link
                        href="/dashboard/agenda"
                        onClick={(e) => e.currentTarget.blur()}
                        className={`btn bg-zinc-50 border-none shadow-none w-full flex items-center justify-start text-lg hover:bg-gradient-to-tl focus:outline-none focus:ring-4
                            ${pathName === "/dashboard/agenda"
                                ? "bg-gradient-to-br from-purple-900 to-indigo-700 text-white"
                                : "text-gray-400 bg-gradient-to-br hover:text-indigo-800 hover:bg-zinc-50"}`}
                    >
                        <CalendarDays className="hidden lg:block"/>
                        Agenda
                    </Link>
                    {/* Link para o Atendimento */}
                    <Link
                        href="/dashboard/atendimento"
                        onClick={(e) => e.currentTarget.blur()}
                        className={`btn bg-zinc-50 border-none shadow-none w-full flex items-center justify-start text-lg hover:bg-gradient-to-tl focus:outline-none focus:ring-4
                            ${pathName === "/dashboard/atendimento"
                                ? "bg-gradient-to-br from-purple-900 to-indigo-700 text-white"
                                : "text-gray-400 bg-gradient-to-br hover:text-indigo-800 hover:bg-zinc-50"}`}
                    >
                        <MessageSquareShare className="hidden lg:block"/>
                        Atendimento
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardNavBar