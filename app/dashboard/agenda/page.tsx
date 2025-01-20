import Image from "next/image";

const provas = [
  { data: '2025-01-03', descricao: 'Prova A - 03/01 - 16:00' },
  { data: '2025-01-05', descricao: 'Prova B - 05/01 - 10:00' },
  { data: '2025-01-09', descricao: 'Prova C - 09/01 - 15:00' },
  { data: '2025-01-12', descricao: 'Prova D - 12/01 - 10:00' },
];
const aulas = [
  { data: '2025-01-04', descricao: 'Aula 1 - 04/01 - 16:00' },
  { data: '2025-01-06', descricao: 'Aula 2 - 06/01 - 10:00' },
  { data: '2025-01-10', descricao: 'Aula 3 - 10/01 - 15:00' },
  { data: '2025-01-11', descricao: 'Aula 4 - 11/01 - 10:00' },
];

const Schedule = () => {
  // Função para verificar se o dia é uma prova 
  const isProvaDay = (date: string) => {
    return provas.some((prova) => prova.data === date);
  };
  const isAulaDay = (date: string) => {
    return aulas.some((aula) => aula.data === date);
  };

  // Renderiza o calendário do mês atual
  const renderCalendar = () => {
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth(); // Mês (0-11)
    const anoAtual = dataAtual.getFullYear();

    // Obter o número de dias no mês atual
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Renderizar cada dia do mês
    return Array.from({ length: diasNoMes }, (_, index) => {
      const dia = (index + 1).toString().padStart(2, '0');
      const mes = (mesAtual + 1).toString().padStart(2, '0');
      const dataFormatada = `${anoAtual}-${mes}-${dia}`;

      const isHoje = diaAtual === index + 1; // Verifica se é o dia atual
      const isProva = isProvaDay(dataFormatada);
      const isAula = isAulaDay(dataFormatada);

      return (
        <div
          key={dataFormatada}
          className={`text-sm border rounded-md p-2 ${
            isHoje
              ? 'bg-green-300 text-black font-bold' // Destaque para o dia atual
              : isProva
              ? 'bg-blue-300 text-black font-bold' // Destaque para dias de prova
              : isAula
              ? 'bg-yellow-300 text-black font-bold' // Destaque para dias de aula
              : ''
          }`} 
        >
          {index + 1}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          {/* Informações do Usuário */}
          <div className="flex items-center space-x-4">
            <Image
              src="/dashboard/img/avatar-cservice-male-500-500.png"
              width={40}
              height={40}
              alt="User Image"
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold text-blue-800">Fernando de Souza</h1>
              <p className="text-sm text-gray-500">Matrícula: 43-0295810457</p>
              <p className="text-sm text-gray-500">Categoria: AB</p>
              <p className="text-sm text-gray-500">Estágio: Aulas Práticas</p>
            </div>
          </div>

          {/* Botões */}
          <div className="space-x-2">
            <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
              Agendar
            </button>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              Professores
            </button>
            <button className="bg-blue-400 text-white py-1 px-4 rounded hover:bg-blue-500">
              Aulas
            </button>
          </div>
        </div>

        {/* Calendário */}
        <div className="bg-blue-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-800">
          {new Date()
          .toLocaleString('default', { month: 'long', year: 'numeric' })
           .replace(/^\w/, (c) => c.toUpperCase())}
          </h2>
          </div>
          <div className="grid grid-cols-7 text-center gap-2">
            {/* Cabeçalho dos dias da semana */}
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
              <div key={index} className="font-semibold text-blue-700">
                {day}
              </div>
            ))}

            {/* Dias do mês */}
            {renderCalendar()}
          </div>
        </div>

        {/* Listas de Provas e Aulas */}
<div className="mt-6 flex space-x-8">
  {/* Lista de Provas */}
  <div className="w-1/2">
    <h3 className="text-lg font-semibold text-blue-800">Provas:</h3>
    {provas.map((prova, index) => (
      <p key={index} className="text-sm text-gray-600">
        {prova.descricao}
      </p>
    ))}
  </div>

  {/* Lista de Aulas */}
  <div className="w-1/2">
    <h3 className="text-lg font-semibold text-blue-800">Aulas:</h3>
    {aulas.map((aula, index) => (
      <p key={index} className="text-sm text-gray-600">
        {aula.descricao}
      </p>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Schedule;
