import { Circle, CircleAlert } from "lucide-react"


function AtendimentoTicketCard() {
    return (
        <div>
            {/* Card de Tickets */}
            <div className="bg-zinc-100 rounded-sm p-4 mt-4">
                {/* Header do Ticket */}
                <div className="flex flex-row justify-between">
                    <div className="">
                        <p className="font-semibold">Ticket Nº:</p>
                        <p>116</p>
                        <p className="font-semibold">Categoria:</p>
                        <p>Aula Prática</p>
                    </div>
                    <div className="flex flex-row">
                        <Circle fill="#b6ff47" className="text-white" />
                        <Circle fill="#ffe747" className="text-white" />
                        <CircleAlert fill="#ff4646" className="text-white" />
                    </div>
                </div>
                <div>
                    <p className="font-semibold my-4">Problema com a Embreagem</p>
                    <p className="line-clamp-3 text-ellipsis">Achei a embreagem do carro muito dura e isso atrapalhou a minha aula, gostaria que fosse realizado uma manutenção no veículo.
                        O numero do carro era 03.
                        A instrutora da aula foi a Mari.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AtendimentoTicketCard