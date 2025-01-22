import * as LucideIcons from "lucide-react";

interface DashboardCardTextLg {
  icon: keyof typeof LucideIcons;
  title: string;
  bodyNumber: string;
  fill: string;
  stroke: string;
}

function DashboardCardTextLg({
  title,
  icon,
  bodyNumber,
  fill,
  stroke,
}: DashboardCardTextLg) {
  // Obtém o componente do ícone dinamicamente a partir do objeto de ícones importado
  const IconComponent = LucideIcons[icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <div>
      {/* Body do Card */}
      <div className="flex flex-row w-full md:w-60 rounded-md shadow-md bg-zinc-50 p-3">
        {/* Icone do Card */}
        <div className="w-4/12 self-center">
          {/* Exibe o ícone, se encontrado */}
          {IconComponent && (
            <IconComponent className="w-[70%] h-[70%]" fill={fill} stroke={stroke} />
          )}
        </div>
        <div className="flex flex-col">
          {/* Header do Card */}
          <div className="text-xl dynamic-text">
            <h1>{title}</h1>
          </div>
          {/* Body do header */}
          <div className="self-end text-3xl">
            <p>{bodyNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCardTextLg;
