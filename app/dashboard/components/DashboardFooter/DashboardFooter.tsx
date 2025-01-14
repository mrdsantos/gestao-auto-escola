"use client";

import Image from "next/image";
import Link from "next/link";
import { SlidersVertical } from "lucide-react";

function DashboardFooter() {
  return (
    <footer>
      <ul className="w-full flex flex-row mb-4 justify-end items-center">
        {/* Informações do usuário */}
        <li className="grow">
          <div className="flex flex-row gap-2 items-center ">
            <div className="avatar">
              <Image
                src="/dashboard/img/avatar-cservice-male-500-500.png"
                width={40}
                height={40}
                alt="User Image"
              />
            </div>
            <div className="font-medium text-lg truncate">
              <span>Fernando de Souza</span>
            </div>
          </div>
        </li>

        {/* Dropdown para as opções */}
        <li className="dropdown dropdown-top dropdown-end">
          {/* Botão do dropdown */}
          <div
            tabIndex={0}
            className="p-2 rounded-full bg-gradient-to-br from-purple-900 to-indigo-700 text-white hover:bg-gradient-to-tl hover:from-purple-950 hover:to-indigo-950 focus:outline-none focus:ring-4"
          >
            <SlidersVertical className="w-6 h-6" />
          </div>

          {/* Conteúdo do dropdown */}
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mb-4"
          >
            <li>
              <Link href="/dashboard/configuracoes" className="w-full text-indigo-700 hover:bg-indigo-100">
                Configurações
              </Link>
            </li>
            <li>
              <Link href="/dashboard/logout" className="w-full text-red-700 hover:bg-red-100">
                Sair
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default DashboardFooter;
