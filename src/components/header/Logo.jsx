import React from "react";
import LogoImage from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <a href="./index.html">
        <img className="h-9" src={LogoImage} alt="Weather App" />
      </a>
    </div>
  );
}
