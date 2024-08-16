// components/LottieAnimation.tsx
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  height?: number;
  width?: number;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  height = 400,  // Valor padrão
  width = 400,   // Valor padrão
}: LottieAnimationProps) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;