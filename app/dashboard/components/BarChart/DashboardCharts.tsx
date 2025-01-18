"use client";

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

// Registrar os componentes necessários do Chart.js
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

// Dados para o gráfico de linha
const lineData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    {
      label: "Aulas",
      data: [30, 45, 50, 70, 85, 90, 100, 120, 110, 130, 140, 150],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

// Dados para o gráfico de barras
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

// Opções de configuração dos gráficos
const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true },
  },
};

// Componente principal
export default function DashboardCharts() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0">
      {/* Gráfico de Linha */}
      <div className="w-full lg:w-5/12 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Aulas nos Últimos 12 Meses</h3>
        <Line data={lineData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { text: "Aulas nos Últimos 12 Meses" }, legend: { position: "top" } } }} />
      </div>

      {/* Gráfico de Barras */}
      <div className="w-full lg:w-5/12 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Alunos nos Últimos 12 Meses</h3>
        <Bar data={barData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { text: "Alunos nos Últimos 12 Meses" }, legend: { position: "top" } } }} />
      </div>
    </div>
  );
}
