import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/Industries-served";
import OurCoreProducts from "@/components/our-core-products";
import { Button } from "@/components/ui/button";
import WhyChooseSparX from "@/components/why-choose-sparx";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          background: "linear-gradient(to right, #f1f2f4, #f3e3d4)",
        }}
      >
        {/* Header */}
        <header className="px-6 py-4">
          <nav
            className="flex items-center justify-between mx-auto rounded-full px-8 py-4"
            style={{
              width: "95%",
              backgroundColor: "#191817",
              padding: "10px 30px",
            }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/Logos/SparX/Sparx-W-Dark-RGB-01.png"
                alt="AccuraCore Logo"
                className="w-25 object-contain"
              />
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer" style={{fontSize:"12px"}}>
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer" style={{fontSize:"12px"}}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer" style={{fontSize:"12px"}}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer" style={{fontSize:"12px"}}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-white hover:text-blue-200 cursor-pointer" style={{fontSize:"12px"}}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                className="text-white rounded-full flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                  fontSize:"13px"
                }}
              >
                Explore Our Products
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="px-6 py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div style={{ marginLeft: "5%" }}>
              <h1
                className="text-gray-900 leading-tight mb-6"
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
              <p className="text-md text-gray-700 mb-8 leading-relaxed">
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
            <div className="flex justify-center">
              <img
                src="/Icons/red-left.png"
                alt="red"
                className="object-contain"
                style={{
                  width: "4%",
                  position: "absolute",
                  top: "30%",
                  left: "55%",
                }}
              />
              <img
                src="/Images/Hero-Image.png"
                alt="Hero Illustration"
                className="object-contain"
                style={{ width: "65%" }}
              />
               <img
                src="/Icons/blue-right.png"
                alt="red"
                className="object-contain"
                style={{
                  width: "2%",
                  position: "absolute",
                  top: "750px",
                  left: "88%",
                }}
              />
            </div>
          </div>
        </main>
      </div>

      <OurCoreProducts />

      <EverythingYouNeedSection />

      <WhyChooseSparX />

      <IndustriesServed />

      <Footer />
    </>
  );
}
