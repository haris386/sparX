"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { FadeInWebsite } from "@/components/FadeInWebsite";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [navbarDone, setNavbarDone] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const mainRef = useRef(null);

  const products = [
    {
      name: "AccuraCore",
      desc: "The new standard in Contractor CRMs.",
      link: "https://accuracore.com",
    },
    {
      name: "ClaimCore",
      desc: "The CRM that multiplies Adjustor productivity.",
      link: "https://claimcore.com",
    },
    {
      name: "AccuraCam",
      desc: "The advanced camera that powers the future.",
      link: "https://accuracam.com",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = loading || !navbarDone ? "hidden" : "auto";
  }, [loading, navbarDone]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* Navbar triggers navbarDone when fully expanded */}
      <AnimatedNavbar
        products={products}
        onAnimationComplete={() => setNavbarDone(true)}
        onProductClick={() => setIsProductsOpen(true)}
      />

      {/* Website content only renders when navbar animation is done */}
      {navbarDone && (
        <div
          ref={mainRef}
          className="relative opacity-0"
          style={{
            perspective: "1500px",
            transformStyle: "preserve-3d",
            overflowX: "hidden",
            background:
              "linear-gradient(to right, rgb(241, 242, 244), rgb(243, 227, 212))",
          }}
        >
          {/* Fade-in animation after navbar */}
          <FadeInWebsite mainRef={mainRef} />
        </div>
      )}
    </>
  );
}
