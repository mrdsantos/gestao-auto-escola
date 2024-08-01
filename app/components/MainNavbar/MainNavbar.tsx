"use client" // Declara que este módulo é um módulo do cliente, permitindo a execução no cliente.
import { usePathname } from "next/navigation" // Importa o hook usePathname do Next.js para obter a rota atual.
import Link from "next/link" // Importa o componente Link do Next.js para navegação.
import clsx from "clsx" // Importa a biblioteca clsx para unir classes condicionalmente.
import { Menu, CircleUser, LogIn, X } from "lucide-react"
import ThemeController from "../ThemeController/ThemeController"


const MainNavbar = () => {
  const pathname = usePathname(); // Obtém a rota atual usando o hook usePathname.
  // Função para gerar classes CSS para links de navegação.
  // Se o href corresponder à rota atual, adiciona classes extras para estilizar o link ativo.
  const linkClass = (href: string) =>
    clsx(
      "px-3 font-semibold text-lg hover:text-sky-800 md:text-nowrap", // Classes base para todos os links.
      {
        "underline underline-offset-8 decoration-2 decoration-complementary-darker": pathname === href, // Classes adicionais se o link for o ativo.
      }
    );
  return (
    <nav className="navbar bg-primary text-white">
      {/* Container flexível contendo o ícone da casa */}
      <div className="nav-start px-5 flex-1">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="border-none bg-primary active:animate-spin">
            <Menu />
        </div>
          <div tabIndex={0} className="menu menu-sm dropdown-content bg-primary rounded-box gap-y-3 mt-3 w-52 p-2 shadow">
            <div className={linkClass("/")}>
              <Link href={"/"}>Inicio</Link>
            </div>
            {/* Link para a página Sobre */}
            <div className={linkClass("/sobre")}>
              <Link href={"/sobre"}>Sobre</Link>
            </div>
            {/* Link para a página Perguntas Frequentes */}
            <div className={linkClass("/perguntas-frequentes")}>
              <Link href={"/perguntas-frequentes"}>Perguntas Frequentes</Link>
            </div>
            {/* Link para a página Cadastro */}
            <div className={linkClass("/cadastro")}>
              <Link href={"/cadastro"}>Cadastro</Link>
            </div>
            {/* Link para a página de Login */}
            <div className={`${linkClass("/login")} bg-primary `}>
              <Link href={"/login"} className="inline-flex gap-1"><CircleUser /><LogIn /></Link>
            </div>
          </div>
        </div>
        <div className="mx-auto md:mx-0">
          <Link href={"/"}>
            <h1>logo</h1>
          </Link>
        </div>
      </div>
      {/* Link para a página inicial */}
      <div className="navbar-end hidden md:inline-flex">
        <div className={linkClass("/")}>
          <Link href={"/"}>Inicio</Link>
        </div>
        {/* Link para a página Sobre */}
        <div className={linkClass("/sobre")}>
          <Link href={"/sobre"}>Sobre</Link>
        </div>
        {/* Link para a página Perguntas Frequentes */}
        <div className={linkClass("/perguntas-frequentes")}>
          <Link href={"/perguntas-frequentes"}>Perguntas Frequentes</Link>
        </div>
        {/* Link para a página Cadastro */}
        <div className={linkClass("/cadastro")}>
          <Link href={"/cadastro"}>Cadastro</Link>
        </div>
        {/* Link para a página de Login */}
        <div className={`${linkClass("/login")} bg-primary `}>
          <Link href={"/login"} className="inline-flex gap-1"><CircleUser /><LogIn /></Link>
        </div>
        {/* Darkmode Toggler */}
        <ThemeController />
      </div>
    </nav>
  )
}
export default MainNavbar // Exporta o componente MainNavbar