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
      <div className="p-1 mt-1 font-medium">
        <h2 className="text-xl font-extrabold">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCardLarge

// interface FeatureCardSmallProps {
//     iconName: keyof typeof icons;
//     iconStyle?: string;
//     iconSize?: string | number;
//     title: string;
//     description: string;
// }
// const FeatureCardSmall = ({ iconName, iconStyle, iconSize, title, description }: FeatureCardSmallProps) => {
//     const IconComponent = icons[iconName]
//     return (
//         <div className="flex flex-row items-center p-4 rounded-md shadow-sm">
//             <div className={`flex items-center justify-center ${iconStyle || ''}`}>
//                 <IconComponent size={iconSize || 24} />
//             </div>
//             <div className="pl-6">
//                 <h3 className="text-lg font-bold">{title}</h3>
//                 <p className="text-gray-900">{description}</p>
//             </div>
//         </div>
//     )
// }
// export default FeatureCardSmall