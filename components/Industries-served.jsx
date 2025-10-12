"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesServed() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".industry-card");

    // Reset initial state
    gsap.set(cards, { opacity: 0, y: 50 });

    // Animation timeline
    cards.forEach((card, i) => {
      let fromX = 0;
      let fromY = 0;

      if (i === 0) fromX = -150; // left
      if (i === 1) fromY = 150;  // bottom
      if (i === 2) fromX = 150;  // right

      gsap.fromTo(
        card,
        { opacity: 0, x: fromX, y: fromY },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => console.log("✅ Entered Industries Served section"),
            onLeaveBack: () => console.log("⬅️ Left Industries Served section"),
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-2 px-4"
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div style={{ margin: "auto", width: "90%" }} className="industriesServed">
        <div className="text-center mb-16">
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "25px", fontWeight: "400" }}
          >
            Industries Served
          </h2>

          {/* 🪄 Animated Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group industry-card">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/Images/Insurance-Providers.png')`,
                }}
              ></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-[10px] px-4 py-3">
                  <h3
                    className="text-gray-900"
                    style={{ fontWeight: "600", padding: "15px" }}
                  >
                    Insurance Providers
                  </h3>
                </div>
              </div>
            </div>

            {/* Middle Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group industry-card">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/Images/Contractors-&-Field-Ops.png')`,
                }}
              ></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-[10px] px-4 py-3">
                  <h3
                    className="text-gray-900"
                    style={{ fontWeight: "600", padding: "15px" }}
                  >
                    Contractors & Field Ops
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Manage job cost work orders with real-time task tracking,
                    updates, and seamless coordination across teams
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group industry-card">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/Images/Property-Managers.png')`,
                }}
              ></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-[10px] px-4 py-3">
                  <h3
                    className="text-gray-900"
                    style={{ fontWeight: "600", padding: "15px" }}
                  >
                    Property Managers
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
