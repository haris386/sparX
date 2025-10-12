"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    tl.to(".loader-bar", {
      width: "100%",
      duration: 1.4,
      ease: "power2.inOut",
    })
      .to(".loader", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .set(".loader", { display: "none" });
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF9ED]">
      <div className="loader-bar bg-[#FF3A41] h-[4px] w-[0%] rounded-full"></div>
      <p className="mt-5 text-gray-800 font-semibold tracking-wide text-sm">
        Loading experience...
      </p>
    </div>
  );
}
