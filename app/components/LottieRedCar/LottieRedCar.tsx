import React, { useEffect, useState } from 'react';
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
  height = 400,
  width = 400,
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

const LottieRedCar = () => {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/lotties/lottie-red-car.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  if (!animationData) {
    return null; // Opcional: Pode adicionar um carregador ou mensagem de carregamento aqui
  }

  return (
    <LottieAnimation 
      animationData={animationData} 
      height={400} 
      width={400} 
      loop={true} 
      autoplay={true} 
    />
  );
};

export default LottieRedCar;
