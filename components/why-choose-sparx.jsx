"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function WhyChooseSparX() {
  useEffect(() => {
    const section = document.querySelector(".why-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);


   return (
    <section
      className="py-20 px-4 why-section"
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div
        className="why-grid grid lg:grid-cols-2 gap-30 items-start"
        style={{ width: "92%", margin: "auto", marginTop: "50px" }}
      >
        {/* Left Column */}
        <div className="why-left space-y-6">
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "30px", fontWeight: "400" }}
          >
            Why<br />Choose<br />SparX?
          </h2>

          <div className="why-cards flex flex-col gap-5">
            {[
              "Enterprise-Grade Security",
              "US Insurance Market Expertise",
              "Scalable Cloud Infrastructure",
              "Smart AI-Powered Monitoring",
              "99.99% Uptime & Support SLA",
            ].map((text, i) => (
              <div
                key={i}
                className="why-card bg-white rounded-[32px] p-3.5 flex flex-col gap-5"
              >
                <h3 className="text-[13px] font-semibold text-gray-900">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="why-right relative">
          <img
            src="/Images/Woman-Typing-at-Desk-1.png"
            alt="AccuraCore Logo"
            className="object-contain w-[80%]"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div
        className="why-bottom"
        style={{ margin: "auto", width: "80%", position: "relative" }}
      >
        <img src="/Icons/red-left.png" alt="red" className="object-contain left-el animate-move-left" />
        <h2
          className="text-gray-900 our-software text-center"
          style={{
            fontSize: "30px",
            fontWeight: "400",
            padding: "10rem 15rem",
            paddingBottom: "5rem",
          }}
        >
          Our software enables AI-augmented decisions across critical insurer
          and contractor workflows—from office operations to field execution.
        </h2>
        <img src="/Icons/red-right.png" alt="red" className="object-contain right-el animate-move-right" />
      </div>
    </section>
  );
}

