"use client" // Declara que este módulo é um módulo do cliente, permitindo a execução no cliente.

import { usePathname } from "next/navigation" // Importa o hook usePathname do Next.js para obter a rota atual.
import Link from "next/link" // Importa o componente Link do Next.js para navegação.
import clsx from "clsx" // Importa a biblioteca clsx para unir classes condicionalmente.
import { CircleUser, LogIn } from "lucide-react"



const MainNavbar = () => {
  const pathname = usePathname(); // Obtém a rota atual usando o hook usePathname.

  // Função para gerar classes CSS para links de navegação.
  // Se o href corresponder à rota atual, adiciona classes extras para estilizar o link ativo.
  const linkClass = (href: string) =>
    clsx(
      "px-3 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primary font-semibold text-lg ", // Classes base para todos os links.
      {
        "underline underline-offset-8 decoration-2 decoration-primary": pathname === href, // Classes adicionais se o link for o ativo.
      }
    );

  return (
    <nav className="navbar bg-neutral w-full md:px-10">
      {/* Container flexível contendo o ícone da casa */}
      <div className="flex-1 px-3">
        <Link href={"/"}>
        </Link>
      </div>

      {/* Link para a página inicial */}
      <div className={linkClass("/")}>
        <Link href={"/"}>Inicio</Link>
      </div>

      {/* Link para a página Perguntas Frequentes */}
      <div className={linkClass("/perguntas-frequentes")}>
        <Link href={"/perguntas-frequentes"}>Perguntas Frequentes</Link>
      </div>

      {/* Link para a página Cadastro */}
      <div className={linkClass("/cadastro")}>
        <Link href={"/sobre"}>Cadastro</Link>
      </div>

      {/* Link para a página de Login */}
      <div className={`${linkClass("/login")} bg-neutral `}>
        <Link href={"/login"} className="inline-flex gap-1"><CircleUser /><LogIn /></Link>
      </div>
    </nav>
  )
}

export default MainNavbar // Exporta o componente MainNavbar