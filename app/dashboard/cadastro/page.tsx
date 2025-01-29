"use client";

import { useState } from "react";

export default function CadastroClientes() {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nomeCompleto: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastrar = () => {
    if (formData.id !== null) {
      const clientesAtualizados = clientes.map((cliente) =>
        cliente.id === formData.id ? { ...formData } : cliente
      );
      setClientes(clientesAtualizados);
    } else {
      const novoCliente = { ...formData, id: Date.now() };
      setClientes([...clientes, novoCliente]);
    }
    limparFormulario();
  };

  const handleRemover = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
    if (formData.id === id) {
      limparFormulario();
    }
  };

  const handleEditar = (cliente) => {
    setFormData(cliente);
  };

  const limparFormulario = () => {
    setFormData({ id: null, nomeCompleto: "", email: "", senha: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Clientes</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCadastrar();
        }}
        className="flex flex-col max-w-md mb-8"
      >
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Nome Completo</span>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">E-mail</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Senha</span>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <div className="flex gap-4">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {formData.id !== null ? "Alterar" : "Cadastrar"}
          </button>
          {formData.id !== null && (
            <button type="button" onClick={limparFormulario} className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Lista de Clientes</h3>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nome Completo</th>
            <th className="border border-gray-300 px-4 py-2">E-mail</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{cliente.nomeCompleto}</td>
                <td className="border border-gray-300 px-4 py-2">{cliente.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => handleEditar(cliente)} className="mr-2 py-1 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Alterar</button>
                  <button onClick={() => handleRemover(cliente.id)} className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600">Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">Nenhum cliente cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
<<<<<<< HEAD
  )
}"use client";

import { useState } from "react";

export default function CadastroClientes() {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nomeCompleto: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastrar = () => {
    if (formData.id !== null) {
      const clientesAtualizados = clientes.map((cliente) =>
        cliente.id === formData.id ? { ...formData } : cliente
      );
      setClientes(clientesAtualizados);
    } else {
      const novoCliente = { ...formData, id: Date.now() };
      setClientes([...clientes, novoCliente]);
    }
    limparFormulario();
  };

  const handleRemover = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
    if (formData.id === id) {
      limparFormulario();
    }
  };

  const handleEditar = (cliente) => {
    setFormData(cliente);
  };

  const limparFormulario = () => {
    setFormData({ id: null, nomeCompleto: "", email: "", senha: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Clientes</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCadastrar();
        }}
        className="flex flex-col max-w-md mb-8"
      >
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Nome Completo</span>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">E-mail</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Senha</span>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <div className="flex gap-4">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {formData.id !== null ? "Alterar" : "Cadastrar"}
          </button>
          {formData.id !== null && (
            <button type="button" onClick={limparFormulario} className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Lista de Clientes</h3>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nome Completo</th>
            <th className="border border-gray-300 px-4 py-2">E-mail</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{cliente.nomeCompleto}</td>
                <td className="border border-gray-300 px-4 py-2">{cliente.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => handleEditar(cliente)} className="mr-2 py-1 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Alterar</button>
                  <button onClick={() => handleRemover(cliente.id)} className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600">Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">Nenhum cliente cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
=======
>>>>>>> 3c96f1d491aae513b90f371637e6ce80be08a1e4
  );
}
