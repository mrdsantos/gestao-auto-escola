import AtendimentoTicketCard from "../components/AtendimentoTicketCard/AtendimentoTicketCard";
import DashboardCardTextLg from "../components/DashboardCardTextLg/DashboardCardTextLg";

export default function Atendimento() {
  return (
    <div>
      <h1 className="font-extrabold text-3xl">Todos Tickets</h1>
      <div className="divider"></div>
      {/* Container do atendimento */}
      <div className="flex flex-row gap-5">
        {/* Lado esquerdo */}
        <div className="bg-zinc-50 rounded-md min-h-[500px] max-h-[500px] overflow-auto basis-1/4 p-3">
          {/* Card de Tickets */}
          <AtendimentoTicketCard />
          <AtendimentoTicketCard />
        </div>
        {/* Lado direito */}
        <div className="bg-zinc-50 rounded-md min-h-[500px] overflow-auto basis-3/4">
          {/* Chat de atendimento */}
          <div className="flex flex-col h-full">
            {/* Área de chat */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {/* Mensagem de Chat - Exemplo de atendente */}
              <div className="flex items-start gap-3 justify-end">
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-white font-bold">A</span> {/* Avatar do atendente */}
                </div>
                <div className="flex flex-col max-w-[80%] bg-gray-700 text-white p-3 rounded-lg shadow-lg">
                  <p className="text-sm">Claro, como posso te ajudar?</p>
                  <span className="text-xs text-gray-300 mt-1">14:26</span> {/* Hora da mensagem */}
                </div>
              </div>

              {/* Mensagem de Chat - Exemplo de usuário */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white font-bold">U</span> {/* Avatar do usuário */}
                </div>
                <div className="flex flex-col max-w-[80%] bg-blue-500 text-white p-3 rounded-lg shadow-lg">
                  <p className="text-sm">Estou tendo dificuldades com o pagamento.</p>
                  <span className="text-xs text-gray-300 mt-1">14:28</span> {/* Hora da mensagem */}
                </div>
              </div>
            </div>

            {/* Campo para nova mensagem (fixado na parte inferior) */}
            <div className="flex items-center gap-3 p-4 border-t border-gray-300">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold">U</span> {/* Avatar do usuário */}
              </div>
              <div className="flex flex-grow items-center gap-2">
                <input
                  type="text"
                  placeholder="Escreva uma mensagem..."
                  className="flex-grow p-2 rounded-lg border border-gray-300"
                />
                <button className="bg-blue-500 text-white p-2 rounded-lg">
                  Enviar
                </button> {/* Botão de envio */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seção Inferior de Cartões */}
      <div className="flex flex-row justify-center flex-wrap m-w-full mt-5 gap-6">
        {/* Corpo do Card */}
        <DashboardCardTextLg
          icon="Ticket"
          title="Tickets Abertos"
          bodyNumber="17"
          fill="white"
          stroke="#ca8a04"
        />
        <DashboardCardTextLg
          icon="FileClock"
          title="Atrasados"
          bodyNumber="10"
          fill="white"
          stroke="#ef4444"
        />
        <DashboardCardTextLg
          icon="BadgeCheck"
          title="Resolvidos"
          bodyNumber="23"
          fill="white"
          stroke="green"
        />
        <DashboardCardTextLg
          icon="Clock10Icon"
          title="Tempo Médio"
          bodyNumber="87 min"
          fill="white"
          stroke="gray"
        />
      </div>

    </div>
  );
}

// icon: string;
// title: string;
// bodyNumber: number;