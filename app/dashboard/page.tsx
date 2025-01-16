"use client"; 

import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dados para os gráficos fictícios
const lineData = {
  labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  datasets: [
    {
      label: "Aulas",
      data: [5, 8, 17, 20, 6, 18],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.1,
    },
  ],
};

const barData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    {
      label: "Alunos",
      data: [100, 120, 130, 140, 150, 160, 170, 180, 200, 220, 230, 250],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true },
  },
};

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(5);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <header className="flex flex-wrap justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
        {/* Título e Campo de Pesquisa */}
        <div className="flex flex-wrap items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 bg-gray-100 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Ícone de Notificações */}
        <div className="relative">
          <button
            onClick={togglePopup}
            className="p-3 rounded-full bg-gray-10 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.403-1.403A9.936 9.936 0 0018 12V7a6 6 0 00-12 0v5a9.936 9.936 0 00-2.597 3.597L4 17h5m6 0v-1a3 3 0 00-6 0v1"
              />
            </svg>
          </button>
          {notifications > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
      </header>

      {/* Campos de Informação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-gray-500">Total de Aulas</h4>
          <p className="text-2xl font-bold text-gray-800">76</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-gray-500">Alunos Inscritos</h4>
          <p className="text-2xl font-bold text-gray-800">450</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-gray-500">Aulas Canceladas</h4>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-gray-500">Taxa de Satisfação</h4>
          <p className="text-2xl font-bold text-gray-800">89%</p>
        </div>
      </div>

      {/* Pop-up lateral de notificações */}
      {isPopupOpen && (
        <div
          className={`fixed top-0 right-0 w-64 h-auto bg-white shadow-lg p-4 z-50 m-4`}
        >
          <h3 className="text-lg font-semibold mb-4">Notificações</h3>
          <ul className="space-y-2">
            {/* Notificação fictícia */}
            <li className="flex items-center space-x-2 text-gray-700">
              <span className="w-5 h-5 bg-blue-500 text-white flex items-center justify-center rounded-full">i</span>
              <span>Aula amanhã às 10:15 no carro AAA-1234</span>
            </li>
            {/* Notificação fictícia 2 */}
            <li className="flex items-center space-x-2 text-gray-700">
              <span className="w-5 h-5 bg-blue-500 text-white flex items-center justify-center rounded-full">i</span>
              <span>Aula prática marcada para 1/1/2026.</span>
            </li>
          </ul>
          <button
            onClick={togglePopup}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Fechar
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Gráfico de Linha */}
        <div className="w-full lg:w-5/12 bg-white p-4 rounded-lg shadow-md" style={{ height: "400px" }}>
          <h3 className="text-lg font-semibold mb-4">Aulas nos Últimos 12 Meses</h3>
          <Line data={lineData} options={chartOptions} />
        </div>

        {/* Gráfico de Barras */}
        <div className="w-full lg:w-5/12 bg-white p-4 rounded-lg shadow-md" style={{ height: "400px" }}>
          <h3 className="text-lg font-semibold mb-4">Alunos nos Últimos 12 Meses</h3>
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
