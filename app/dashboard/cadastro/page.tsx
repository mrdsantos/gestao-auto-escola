export default function Cadastro() {
  return (
    <div className="ml-[250px] p-8"> {/* Ajuste para o espaço do menu lateral */}
      <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
      <form className="flex flex-col max-w-md">
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Nome Completo</span>
          <input
            type="text"
            name="nomeCompleto"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">E-mail</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Senha</span>
          <input
            type="password"
            name="senha"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Confirmação de Senha</span>
          <input
            type="password"
            name="confirmSenha"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
