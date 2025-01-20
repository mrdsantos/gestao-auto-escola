import { CalendarDays, Clock, BellDot, SearchIcon } from "lucide-react";

function DashboardHeader() {
    return (
        <div>
            <header className="relative flex items-center mx-6">
                {/* Caixa de pesquisa */}
                <label className="input input-bordered flex items-center gap-2 w-3/12 h-9">
                    <input type="text" className="grow" placeholder="Search" />
                    <SearchIcon className="h-5 text-gray-300" />
                </label>

                {/* Display da data e hora */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-3 items-center text-gray-500">
                    <div className="flex flex-row gap-1">
                        <CalendarDays />
                        <span>
                          {new Date().toLocaleDateString('pt-BR', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          })}
                        </span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <Clock />
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}

                    </div>
                </div>

                {/* Botão de notificação */}
                <div className="ml-auto bg-zinc-50 rounded-full p-3">
                    <BellDot className="text-violet-700" />
                </div>
            </header>
        </div>
    );
}

export default DashboardHeader;