"use client";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [bgColor, setBgColor] = useState("linear-gradient(to right, #f1f2f4, #f3e3d4)");
  const [logo, setLogo] = useState("/Logos/SparX/Sparx-W-Light-RGB-01.png");

  useEffect(() => {
    let flip = false;
    let phaseCount = 0;
    const totalPhases = 6;
    const phaseDuration = 1000;

    const interval = setInterval(() => {
      flip = !flip;
      phaseCount++;

      if (flip) {
        setBgColor("#FF3A41");
        setLogo("/Logos/SparX/Sparx-W-Dark-RGB-01.png");
      } else {
        setBgColor("linear-gradient(to right, #f1f2f4, #f3e3d4)");
        setLogo("/Logos/SparX/Sparx-W-Light-RGB-01.png");
      }

      // stop after completing 10 phases
      if (phaseCount >= totalPhases) {
        clearInterval(interval);
        onFinish();
      }
    }, phaseDuration);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{
        background: bgColor,
        transition: "none", 
      }}
    >
      <img
        src={logo}
        alt="SparX Logo"
        className="w-66 md:w-86 select-none"
        draggable="false"
      />
    </div>
  );
}
