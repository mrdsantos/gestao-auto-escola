import Image from "next/image"
import DashboardNavBar from "../DashboardNavBar/DashboardNavBar"
import DashboardFooter from "../DashboardFooter/DashboardFooter"


function Sidebar() {
    return (
        <aside className="bg-zinc-50 px-6 min-h-full flex flex-col overflow-auto">
            {/* Cabeçalho da Sidebar */}
            <header className="flex flex-col lg:flex-row gap-2 px-2 py-4 items-center">
                <Image
                    src="/img/android-chrome-512x512.png"
                    width={70}
                    height={70}
                    alt="Logo da Empresa"
                />
                <ul className="text-center lg:text-left">
                    <li className="font-medium">Dashboard</li>
                    <li className="font-bold">Gestão Auto Escola</li>
                </ul>
            </header>
            {/* Menu divider */}
            <div className="flex w-full items-center rounded-full">
                <hr className="flex-1 h-px border-t-0 bg-transparent bg-gradient-to-l from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                <span className="text-lg font-medium leading-8 py-3">Menu</span>
                <hr className="flex-1 h-px border-t-0 bg-transparent bg-gradient-to-l from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            </div>
            {/* barra de navegação */}
            <div className="flex-1">
                <DashboardNavBar />
            </div>
            {/* footer */}
            <DashboardFooter />
        </aside>
    )
}

export default Sidebar
