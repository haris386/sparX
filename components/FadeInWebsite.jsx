"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/Industries-served";
import OurCoreProducts from "@/components/our-core-products";
import { HeroSection } from "./HeroSection";
import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";

export function FadeInWebsite({
  mainRef,
  isChatOpen,
  setIsChatOpen,
  isProductsOpen,
  setIsProductsOpen,
  products,
}) {
  useEffect(() => {
    if (mainRef.current) {
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, [mainRef]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Static Background Hero Section */}
      <section
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-0"
        style={{
          background: "linear-gradient(to right, #f1f2f4, #f3e3d4)",
        }}
      >
        <HeroSection />
      </section>

      {/* Scrollable Content (parallax sections) */}
      <LocomotiveScrollWrapper>
        <div
          className="relative z-10"
          style={{
            marginTop: "100vh", // ensures scroll starts after hero
          }}
        >
          {/* Our Core Products */}
          <section data-scroll-section className="relative">
            <div data-scroll data-scroll-speed="1.5">
              <OurCoreProducts />
            </div>
          </section>

          {/* Everything You Need */}
          <section data-scroll-section className="relative">
            <div data-scroll data-scroll-speed="1">
              <EverythingYouNeedSection />
            </div>
          </section>

          {/* Industries Served */}
          <section data-scroll-section className="relative">
            <div data-scroll data-scroll-speed="1.5">
              <IndustriesServed />
            </div>
          </section>

          {/* Footer */}
          <section data-scroll-section className="relative">
            <div data-scroll data-scroll-speed="1.5">
              <Footer />
            </div>
          </section>
        </div>
      </LocomotiveScrollWrapper>
    </div>
  );
}
