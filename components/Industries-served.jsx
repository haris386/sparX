export default function IndustriesServed() {
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
            {/* Insurance Providers Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group">
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

            {/* Contractors & Field Ops Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group">
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

            {/* Property Managers Card */}
            <div className="relative h-125 rounded-2xl overflow-hidden group">
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

        {/* Trusted Impact Section */}
        <div className="text-center mt-20 mb-20">
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "25px", fontWeight: "400" }}
          >
            Trusted Impact
          </h2>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* 2M Stat */}
            <div className="text-center">
              <div className=" text-gray-900 mb-4" style={{fontSize:"25px", fontWeight:"600"}}>2M</div>
              <p className="text-gray-600" style={{fontSize:"14px"}}>
                Recovered warranty
                <br />
                and claim funds
              </p>
            </div>

            {/* Divider */}
            <div className="md:block relative impact-divider">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
              <div className="text-center">
                <div className=" text-gray-900 mb-4" style={{fontSize:"25px", fontWeight:"600"}}>
                  25-50%
                </div>
                <p className="text-gray-600" style={{fontSize:"14px"}}>
                  Reduction in billing errors
                  <br />
                  and manual processing time
                </p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white"></div>
            </div>

            {/* 99.9% Stat */}
            <div className="text-center">
              <div className=" text-gray-900 mb-4" style={{fontSize:"25px", fontWeight:"600"}}>99.9%</div>
              <p className="text-gray-600" style={{fontSize:"14px"}}>
                Integrated audit history and
                <br />
                compliance reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
