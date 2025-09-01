"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const allImages = [
  {
    id: "Real-Time-Collaboration",
    src: "/Images/Real-Time-Collaboration.png",
    alt: "Real Time Collaboration",
    text: "Multiple channels for communication, on a claim-by-claim basis as well as on each photo or document.",
  },
  {
    id: "Audit-&-Compliance-Dashboard",
    src: "/Images/Audit-&-Compliance-Dashboard.png",
    alt: "Audit & Compliance Dashboard",
    text: "AccuraCore's dashboard provides real-time compliance insights, audit trails, and automated alerts—helping you stay inspection-ready and reduce risk.",
  },
  {
    id: "Rule-Based-Automation",
    src: "/Images/Rule-Based-Automation.png",
    alt: "Rule Based Automation",
    text: "AccuraCore’s automation system allows for user-defined rules based on events and timers. Send messages, update statuses, and assign jobs and contacts however you need.",
  },
  {
    id: "API-Integrations",
    src: "/Images/API-Integrations.png",
    alt: "API Integrations",
    text: "We’re committed to providing the most power to the user. Ask us about our API integrations.",
  },
  {
    id: "Document-&-Image-Management",
    src: "/Images/Document-&-Image-Management.png",
    alt: "Document & Image Management",
    text: "Documentation is at the Core of what we do. Photography and document uploading is a breeze with AccuraCam and our document scanner. Comment on each photo and document, search and sort based by tags and document types.",
  },
];

const tabs = [
  { id: "Real-Time-Collaboration", label: "Real Time Collaboration" },
  { id: "Audit-&-Compliance-Dashboard", label: "Audit & Compliance Dashboard" },
  { id: "Rule-Based-Automation", label: "Rule Based Automation" },
  { id: "API-Integrations", label: "API Integrations" },
  { id: "Document-&-Image-Management", label: "Document & Image Management" },
];

// helpers
const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Real-Time-Collaboration");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector(".bg-slide"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0.85, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
        tweenNode.style.transition = "transform 0.3s ease";
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

  const scrollTo = useCallback(
    (id) => {
      const index = allImages.findIndex((img) => img.id === id);
      if (emblaApi) emblaApi.scrollTo(index);
      setActiveTab(id);
    },
    [emblaApi]
  );

  return (
    <section
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div
        className="w-full p-8 lg:p-12"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {/* Heading + CTA */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-8 lg:mb-12 px-4 lg:px-12"
          style={{ width: "98%", margin: "auto", marginBottom: "3rem" }}
        >
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
              AccuraCore brings together adjusters, vendors, and clients in a
              single secure environment. Designed for scale, built for speed.
            </p>
          </div>

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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-regular transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id ? "text-white" : "text-black"
              }`}
              style={{
                background: activeTab === tab.id ? "#FF3A41" : "white",
                border: activeTab === tab.id ? "2px solid #f8a8ac" : "unset",
                fontSize: "12px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Embla Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {allImages.map((img) => (
              <div
                key={img.id}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_55%] flex justify-center items-center px-1 relative"
              >
                {/* Background Image */}
                <div
                  className="bg-slide w-full h-[300px] md:h-[500px] rounded-xl flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay Box */}
                  <div
                    className="m-4 rounded-md backdrop-blur-[5px] 
             mb-[2.5rem] md:mb-[3.6rem] 
             p-[10px] md:p-[20px]"
                    style={{
                      backgroundColor: "#3838386b",
                    }}
                  >
                    <h3
                      className="text-white font-semibold 
               text-[13px] md:text-base 
               mb-[10px]"
                    >
                      {img.alt}
                    </h3>
                    <p className="text-white text-[11px] md:text-sm">
                      {img.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
