"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/Industries-served";
import OurCoreProducts from "@/components/our-core-products";
import { Button } from "@/components/ui/button";
import WhyChooseSparX from "@/components/why-choose-sparx";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          background: "linear-gradient(to right, #f1f2f4, #f3e3d4)",
        }}
      >
        {/* Header */}
        <header className="px-6 py-4 header">
          <nav
            className="flex items-center justify-between mx-auto rounded-full px-8 py-4"
            style={{
              width: "95%",
              backgroundColor: "#191817",
            }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/Logos/SparX/Sparx-W-Dark-RGB-01.png"
                alt="AccuraCore Logo"
                className="w-24 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "About", id: "about" },
                { label: "Products", id: "products" },
                { label: "Why Choose Us", id: "why" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="flex items-center space-x-1 text-white hover:text-red-200 cursor-pointer"
                  style={{ fontSize: "12px" }}
                >
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                className="text-white rounded-full flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                  fontSize: "13px",
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

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#191817] px-6 py-4 space-y-4 mobileNav">
              <div className="flex flex-col space-y-4 text-white text-sm">
                <span onClick={() => handleScroll("about")}>About</span>
                <span onClick={() => handleScroll("products")}>Products</span>
                <span onClick={() => handleScroll("why")}>Why Choose Us</span>
                <span onClick={() => handleScroll("contact")}>Contact Us</span>
              </div>

              {/* Mobile Button */}
              <div className="flex flex-col space-y-3 mt-4">
                <Button
                  className="text-white rounded-full flex items-center"
                  style={{
                    backgroundColor: "#FF3A41",
                    padding: "25px 15px",
                    border: "2px solid #f8a8ac",
                    fontSize: "13px",
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
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main id="about" className="px-6 py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center main-div">
            {/* Left Column */}
            <div style={{ marginLeft: "5%" }}>
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
                className="object-contain custom-element-1"
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
                className="object-contain custom-image-1"
                style={{ width: "65%" }}
              />
              <img
                src="/Icons/blue-right.png"
                alt="red"
                className="object-contain custom-element-2"
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

      <div id="products">
        <OurCoreProducts />
      </div>

      <EverythingYouNeedSection />

      <div id="why">
        <WhyChooseSparX />
      </div>

      <IndustriesServed />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
