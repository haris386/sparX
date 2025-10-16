"use client";
import { useEffect } from "react";

export default function IndustriesServed() {
  useEffect(() => {
    const section = document.querySelector(".industriesServed");

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
      className="py-2 px-4"
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div style={{ margin: "auto", width: "90%" }} className="industriesServed">
        {/* Industries Served Section */}
        <div className="text-center mb-16">
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "25px", fontWeight: "400" }}
          >
            Industries Served
          </h2>

          {/* Industry Cards */}
         <div className="grid md:grid-cols-3 gap-8">
  {/* Left Card */}
  <div className="relative h-125 rounded-2xl overflow-hidden group card card-left">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/Images/Insurance-Providers.png')` }}
    ></div>
    <div className="absolute bottom-4 left-4 right-4">
      <div className="bg-white rounded-[10px] px-4 py-3">
        <h3 className="text-gray-900" style={{ fontWeight: "600", padding: "15px" }}>
          Insurance Providers
        </h3>
      </div>
    </div>
  </div>

  {/* Middle Card */}
  <div className="relative h-125 rounded-2xl overflow-hidden group card card-up">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/Images/Contractors-&-Field-Ops.png')` }}
    ></div>
    <div className="absolute bottom-4 left-4 right-4">
      <div className="bg-white rounded-[10px] px-4 py-3">
        <h3 className="text-gray-900" style={{ fontWeight: "600", padding: "15px" }}>
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
  <div className="relative h-125 rounded-2xl overflow-hidden group card card-right">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/Images/Property-Managers.png')` }}
    ></div>
    <div className="absolute bottom-4 left-4 right-4">
      <div className="bg-white rounded-[10px] px-4 py-3">
        <h3 className="text-gray-900" style={{ fontWeight: "600", padding: "15px" }}>
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