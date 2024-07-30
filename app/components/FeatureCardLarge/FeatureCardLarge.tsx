import Image from "next/image";

interface FeatureCardLargeProps {
  title: string;
  description: string;
  imagePath: string;
  width?: number;
  height?: number;
  alt?: string;
  backgroundColor?: string;
}

function FeatureCardLarge({ title, description, imagePath, alt, backgroundColor, width, height }: FeatureCardLargeProps) {
  return (
    <div className={`w-60 h-72 p-3 flex flex-col justify-center items-center text-center gap-4 rounded-lg shadow-xl shadow-slate-400 dark:shadow-none ${backgroundColor}`}>
      <div className="w-auto h-1/3">
        <Image
          src={imagePath}
          width={width}
          height={height}
          alt={`${alt}`}
          style={{height:"100px", width: "auto"}}
        />
      </div>
      <div className="p-1 mt-1 font-medium text-black">
        <h2 className="text-xl font-extrabold">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCardLarge