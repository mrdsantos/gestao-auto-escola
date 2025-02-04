export default function Cadastro() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 p-6">
      {/* Formulário */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Cadastro</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nome Completo</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </form>
      </div>

      {/* Tabela */}
      <div className="ml-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Alunos Cadastrados</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Nome</th>
              <th className="border border-gray-300 p-2">E-mail</th>
              <th className="border border-gray-300 p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">Aluno Exemplo</td>
              <td className="border border-gray-300 p-2 text-center">aluno@email.com</td>
              <td className="border border-gray-300 p-2 text-center">
                <button className="text-blue-500 hover:underline mr-2">Editar</button>
                <button className="text-red-500 hover:underline">Remover</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
