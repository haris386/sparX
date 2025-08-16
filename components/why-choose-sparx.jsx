import Image from "next/image";

export default function WhyChooseSparX() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div>
        <div
          className="grid lg:grid-cols-2 gap-30 items-start"
          style={{ width: "92%", margin: "auto", marginTop: "50px" }}
        >
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-gray-900 mb-4"
                style={{ fontSize: "30px", fontWeight: "400" }}
              >
                Why
                <br /> Choose
                <br /> SparX?
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {/* AccuraCore Card */}
              <div className="bg-white rounded-[32px] p-3.5 flex flex-col gap-5">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    Enterprise-Grade Security
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-[32px] p-3.5 flex flex-col gap-5">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    US Insurance Market Expertise
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-[32px] p-3.5 flex flex-col gap-5">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    Scalable Cloud Infrastructure
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-[32px] p-3.5 flex flex-col gap-5">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    Smart AI-Powered Monitoring
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-[32px] p-3.5 flex flex-col gap-5">
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">
                    99.99% Uptime & Support SLA
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative">
            <img
              src="/Images/Woman-Typing-at-Desk-1.png"
              alt="AccuraCore Logo"
              className="object-contain"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div style={{ margin: "auto", width: "80%" }}>
        <img
                src="/Icons/red-left.png"
                alt="red"
                className="object-contain"
                style={{
                  width: "4%",
                  position: "absolute",
                  top: "3410px",
                  left: "22%",
                }}
              />
        <h2
          className="text-gray-900"
          style={{ fontSize: "30px", fontWeight: "400", padding: "10rem 15rem", paddingBottom:"5rem" }}
        >
          Our software enables AI-augmented decisions across critical insurer
          and contractor workflows—from office operations to field execution.
        </h2>
        <img
                src="/Icons/red-right.png"
                alt="red"
                className="object-contain"
                style={{
                  width: "2%",
                  position: "absolute",
                  top: "3675px",
                  left: "65%",
                }}
              />
      </div>
    </section>
  );
}
