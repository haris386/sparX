import React from 'react'
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
     <main id="about" className="px-6 py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center main-div">
            {/* Left Column */}
            <div style={{ marginLeft: "5%", marginTop: "10rem" }}>
              <h1
                className="text-gray-900 leading-tight mb-6 custom-font-1"
                style={{ fontSize: "40px", fontWeight: "400" }}
              >
                Empowering the Future with Smarter Digital{" "}
                <span
                  style={{
                    backgroundColor: "#FF3A41",
                    borderRadius: "10px",
                    color: "#fff",
                    padding: "0 8px",
                  }}
                >
                  Solutions
                </span>
              </h1>
              <p className="text-md text-gray-700 mb-8 leading-relaxed custom-font-2">
                From intelligent insurance automation to real-time video
                analytics and secure data platforms—Sparx builds solutions that
                redefine industries.
              </p>
              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                }}
                onClick={() => setIsChatOpen(true)}
              >
                Talk to Our Experts
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Right Column */}
            <div
              className="flex justify-center relative w-full"
              style={{ marginTop: "8rem" }}
            >
              <img
                src="/Icons/red-left.png"
                alt="red"
                className="object-contain custom-element-1 animate-pulse-move"
              />
              <img
                src="/Images/Hero-Image.png"
                alt="Hero Illustration"
                className="object-contain custom-image-1"
                style={{ width: "60%" }}
              />
              <img
                src="/Icons/blue-right.png"
                alt="blue"
                className="object-contain custom-element-2"
              />
            </div>
          </div>
        </main>
  )
}
