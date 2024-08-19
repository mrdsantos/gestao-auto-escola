"use client"
import { useState } from "react";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="sticky top-0 bg-gradient-to-r from-[#642B73] from-60% to-[#C6426E] text-white px-5 py-1 text-sm font-semibold flex justify-between items-center z-50">
      <p>Este site contém informações fictícias, pois o serviço ainda está em desenvolvimento.</p>
      <button onClick={handleClose} className="ml-4 text-white font-bold">
        ✕
      </button>
    </div>
  );
};

export default InfoBanner;