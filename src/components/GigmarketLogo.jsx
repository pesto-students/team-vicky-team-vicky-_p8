import Image from "next/image";
import React from "react";

const GigmarketLogo = ({ fillColor }) => {
  return (
    <Image
      src={fillColor !== "#ffffff" ? "/logo.png" : "/logo_white.png"}
      width={200}
      height={30}
      alt="bsiness"
    />
  );
};

export default GigmarketLogo;
