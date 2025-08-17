"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Define all available images globally
const allImages = [
  {
    id: "Real-Time-Collaboration",
    src: "/Images/Real-Time-Collaboration.png",
    alt: "Real Time Collaboration",
  },
  {
    id: "Audit-&-Compliance-Dashboard",
    src: "/Images/Audit-&-Compliance-Dashboard.png",
    alt: "Audit & Compliance Dashboard",
  },
  {
    id: "Rule-Based-Automation",
    src: "/Images/Rule-Based-Automation.png",
    alt: "Rule-Based-Automation",
  },
  {
    id: "API-Integrations",
    src: "/Images/API-Integrations.png",
    alt: "API Integrations Section",
  },
  {
    id: "Document-&-Image-Management",
    src: "/Images/Document-&-Image-Management.png",
    alt: "Document-&-Image-Management View",
  },
];

// Define tabs, linking to the central image ID
const tabs = [
  {
    id: "Real-Time-Collaboration",
    label: "Real Time Collaboration",
    centralImageId: "Real-Time-Collaboration",
  },
  {
    id: "Audit-&-Compliance-Dashboard",
    label: "Audit & Compliance Dashboard",
    centralImageId: "Audit-&-Compliance-Dashboard",
  },
  {
    id: "Rule-Based-Automation",
    label: "Rule Based Automation",
    centralImageId: "Rule-Based-Automation",
  },
  {
    id: "API-Integrations",
    label: "API Integrations",
    centralImageId: "API-Integrations",
  },
  {
    id: "Document-&-Image-Management",
    label: "Document-&-Image-Management",
    centralImageId: "Document-&-Image-Management",
  },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Audit-&-Compliance-Dashboard");

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[1];

  // Determine the central, left, and right images
  const centralImageIndex = allImages.findIndex(
    (img) => img.id === currentTab.centralImageId
  );
  const centralImage = allImages[centralImageIndex];

  const leftImageIndex =
    (centralImageIndex - 1 + allImages.length) % allImages.length;
  const leftImage = allImages[leftImageIndex];

  const rightImageIndex = (centralImageIndex + 1) % allImages.length;
  const rightImage = allImages[rightImageIndex];

  return (
    <section
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div className="w-full">
        {" "}
        <div
          className="p-8 lg:p-12"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Heading */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-8 lg:mb-12 px-4 lg:px-12"
            style={{ width: "98%", margin: "auto", marginBottom: "3rem" }}
          >
            {/* Left col */}
            <div>
              <h2
                className="text-gray-900 mb-4"
                style={{ fontSize: "30px", fontWeight: "400" }}
              >
                Claims command center
              </h2>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                ClaimCore brings together adjusters, vendors, and clients in a
                single secure environment. Designed for scale, built for speed
              </p>
            </div>

            {/* Right col */}
            <div className="flex md:justify-end">
              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                }}
              >
                See the Platform in Action
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-regular transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id ? "text-white" : "text-black"
                } focus:outline-none focus:ring-0`}
                style={{
                  background: activeTab === tab.id ? "#FF3A41" : "white",
                  border: activeTab === tab.id ? "2px solid #f8a8ac" : "unset",
                  boxShadow: "none",
                  fontSize: "12px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Images Slider */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center justify-center h-[500px] relative gap-7">
              {/* Left Image */}
              <div className="relative flex justify-end overflow-hidden h-full rounded-xl">
                <img
                  src={leftImage.src || "/placeholder.svg"}
                  alt={leftImage.alt}
                  className="h-full max-w-none object-contain rounded-xl transition-all duration-500 ease-in-out transform scale-75 translate-x-1/2 opacity-50"
                />
              </div>

              {/* Center Image */}
              <div className="relative flex justify-center h-full">
                <img
                  src={centralImage.src || "/placeholder.svg"}
                  alt={centralImage.alt}
                  className="h-full object-contain rounded-xl transition-all duration-500 ease-in-out slider-img-1"
                  style={{ width: "800px" }}
                />
              </div>

              {/* Right Image */}
              <div className="relative flex justify-start overflow-hidden h-full">
                <img
                  src={rightImage.src || "/placeholder.svg"}
                  alt={rightImage.alt}
                  className="h-full max-w-none object-contain rounded-xl transition-all duration-500 ease-in-out transform scale-75 -translate-x-1/2 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
