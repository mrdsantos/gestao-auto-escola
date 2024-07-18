import { icons } from "lucide-react";

interface FeatureCardSmallProps {
    iconName: keyof typeof icons;
    iconStyle?: string;
    iconSize?: string | number;
    title: string;
    description: string;
}

const FeatureCardSmall = ({ iconName, iconStyle, iconSize, title, description }: FeatureCardSmallProps) => {
    const IconComponent = icons[iconName]

    return (
        <div className="flex flex-row items-center p-4 rounded-md shadow-sm">
            <div className={`flex items-center justify-center ${iconStyle || ''}`}>

                <IconComponent size={iconSize || 24} />

            </div>
            <div className="pl-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-900">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCardSmall