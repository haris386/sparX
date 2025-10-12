"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OurCoreProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Left-side image unfold animation
      gsap.fromTo(
        ".core-left-image",
        { opacity: 0, rotateY: 120, x: -100, transformOrigin: "left center" },
        {
          opacity: 1,
          rotateY: 0,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".core-left-image",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // ✅ Right-side product cards unfold animation
      gsap.utils.toArray(".core-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, rotateX: -120, y: 80, transformOrigin: "top center" },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 custom-section-1"
      style={{
        background: "linear-gradient(to right, #f1f2f4, #f3e3d4)",
        perspective: "2000px",
      }}
    >
      <div
        className="grid lg:grid-cols-2 gap-30 items-start"
        style={{ width: "92%", margin: "auto", marginTop: "50px" }}
      >
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2
              className="core-heading text-gray-900 mb-4"
              style={{ fontSize: "30px", fontWeight: "400" }}
            >
              Our Core Products
            </h2>
            <p
              className="core-description text-gray-600 leading-relaxed"
              style={{ fontSize: "16px" }}
            >
              Innovative solutions designed to empower businesses across claims
              management, workforce operations, and AI-driven video intelligence.
            </p>
          </div>

          {/* ✅ Left-side image with unfold animation */}
          <div className="relative core-left-image">
            <img
              src="/Images/Our-Core-Products-Accuracore.png"
              alt="AccuraCore Logo"
              className="object-contain"
              style={{ width: "100%", willChange: "transform, opacity" }}
            />
          </div>
        </div>

        {/* ✅ Right Column - Product Cards */}
        <div className="flex flex-col gap-5">
          {[
            {
              icon: "/Icons/AccuraCore.png",
              title: "AccuraCore",
              desc: "A Robust, Secure, And Scalable Cloud-Native Infrastructure Platform Powering Enterprise-Level Digital Solutions",
            },
            {
              icon: "/Icons/ClaimCore.png",
              title: "ClaimCore",
              desc: "A Streamlined End-To-End Claims Management Platform Tailored For US Insurance Companies—Automating FNOL, Documents, Approvals, And Compliance",
            },
            {
              icon: "/Icons/AccuraCam.png",
              title: "AccuraCam",
              desc: "AI-Powered Video Intelligence For Fleet Monitoring, Smart Campaigns, And Real-Time Emergency Alerts With Edge Computing",
            },
          ].map((product, i) => (
            <div
              key={i}
              className="core-card bg-white rounded-[32px] p-10 flex flex-col gap-5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="rounded-[12px] flex items-center justify-start custom-icons-1"
                style={{ width: "25%", height: "50px" }}
              >
                <img
                  src={product.icon}
                  alt={product.title}
                  className="object-contain"
                  style={{ width: "60%" }}
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
