"use client"; 
import DashboardCardTextLg from "./components/DashboardCardTextLg/DashboardCardTextLg";
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
import { Layout } from "lucide-react";
import { toPadding } from "chart.js/helpers";

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
    Layout: {toPadding: 10
    }
  },
};

// Componente principal
const Dashboard = () => {
  return (
    <div>
      {/* Campos de Informação */}
      <div className="flex flex-row justify-center w-full mt-5 gap-6">
        {/* Corpo do Card */}
        <DashboardCardTextLg
          icon="BookA"
          title="Total de Aulas"
          bodyNumber="37"
          fill="white"
          stroke="green"
        />
        <DashboardCardTextLg
          icon="Backpack"
          title="Alunos Inscritos"
          bodyNumber="450"
          fill="white"
          stroke="blue"
        />
        <DashboardCardTextLg
          icon="BookX"
          title="Aulas Canceladas"
          bodyNumber="17"
          fill="white"
          stroke="red"
        />
        <DashboardCardTextLg
          icon="Smile"
          title="Taxa de Satisfação"
          bodyNumber="89%"
          fill="white"
          stroke="yellow"
        />
        <div>
         </div>
    </div>
      {/* Gráficos */}
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
};

export default Dashboard;
