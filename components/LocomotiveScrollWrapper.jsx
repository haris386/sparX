"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // scroll easing
      multiplier: 1.1, // scroll speed
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
