import Image from "next/image";

export default function OurCoreProducts() {
  return (
    <section className="py-20 px-4 custom-section-1" style={{ background: "#f3e8c8",}}>
      <div>
        <div
          className="grid lg:grid-cols-2 gap-30 items-start"
          style={{ width: "92%", margin: "auto", marginTop:"50px",  }}
        >
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-gray-900 mb-4"
                style={{ fontSize: "30px", fontWeight: "400" }}
              >
                Our Core Products
              </h2>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Innovative solutions designed to empower businesses across
                claims management, workforce operations, and AI-driven video
                intelligence.
              </p>
            </div>

            {/* Dashboard Image */}
            <div className="relative">
              <img
                src="/Images/Our-Core-Products-Accuracore.png"
                alt="AccuraCore Logo"
                className="object-contain"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Right Column - Product Cards */}
          <div className="flex flex-col gap-5">
            {/* AccuraCore Card */}
            <div className="bg-white rounded-[32px] p-10 flex flex-col gap-5">
              <div className="rounded-[12px] flex items-center justify-start custom-icons-1" style={{
                width:"25%",
                height:"50px"
              }}>
                <img
                  src="/Icons/AccuraCore.png"
                  alt="AccuraCore Icon"
                  className="object-contain"
                  style={{width:"60%"}}
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                  AccuraCore
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  A Robust, Secure, And Scalable Cloud-Native Infrastructure
                  Platform Powering Enterprise-Level Digital Solutions
                </p>
              </div>
            </div>

            {/* ClaimCore Card */}
            <div className="bg-white rounded-[32px] p-10 flex flex-col gap-5">
             <div className="rounded-[12px] flex items-center justify-start custom-icons-1" style={{
                width:"25%",
                height:"50px"
              }}>
                <img
                  src="/Icons/ClaimCore.png"
                  alt="ClaimCore Icon"
                  className="object-contain"
                  style={{width:"60%"}}
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                  ClaimCore
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  A Streamlined End-To-End Claims Management Platform Tailored For
                  US Insurance Companies—Automating FNOL, Documents, Approvals,
                  And Compliance
                </p>
              </div>
            </div>

            {/* AccuraCam Card */}
            <div className="bg-white rounded-[32px] p-10 flex flex-col gap-5">
             <div className="rounded-[12px] flex items-center justify-start custom-icons-1" style={{
                width:"25%",
                height:"50px"
              }}>
                <img
                  src="/Icons/AccuraCam.png"
                  alt="AccuraCam Icon"
                  className="object-contain"
                  style={{width:"60%"}}
                />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                  AccuraCam
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  AI-Powered Video Intelligence For Fleet Monitoring, Smart
                  Campaigns, And Real-Time Emergency Alerts With Edge Computing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}