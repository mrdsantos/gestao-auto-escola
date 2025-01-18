export default function MWrapper() {
  return (
    <div className="flex h-screen w-full"> {/* Certifica-se de ocupar toda a tela horizontalmente */}

      {/* Main wrapper */}
      <div className="w-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Header */}
        <div className="flex items-center justify-between bg-white bg-opacity-50 shadow p-4">
          <p className="text-lg font-bold text-center flex-1 text-purple-900">
            Data da Seção Principal
          </p>

          <div className="flex items-center space-x-3">
            {/* Sino de notificação */}
            <span className="material-icons text-purple-900 hover:text-purple-800 cursor-pointer bg-gray-300 hover:bg-purple-300 p-2 rounded-full">
              notifications  {/* Ícone do sino */}
            </span>
          </div>
        </div>

        {/* Containers principais */}
        <div className="flex flex-grow p-4 space-x-4">
          {/* Container 1 */}
          <div className="flex-1 bg-white bg-opacity-75 shadow rounded-lg p-4">
            <p className="text-purple-900 font-bold">Componente 1</p>
          </div>
          {/* Container 2 */}
          <div className="flex-1 bg-white bg-opacity-75 shadow rounded-lg p-4">
            <p className="text-purple-900 font-bold">Componente 2</p>
          </div>
          {/* Container 3 */}
          <div className="flex-1 bg-white bg-opacity-75 shadow rounded-lg p-4">
            <p className="text-purple-900 font-bold">Componente 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// teste de funcionalidade