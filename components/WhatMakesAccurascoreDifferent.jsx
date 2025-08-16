"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Monitor,
  Workflow,
  TrendingUp,
  Building2,
  Settings,
  BarChart3,
} from "lucide-react";

export default function WhatMakesAccurascoreDifferent() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: "#f4f0ed" }}>
      <div className="max-w-7xl mx-auto" style={{ marginTop: "20rem" }}>
        {/* Top Section - 2 Columns */}
        <div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          style={{ width: "90%", margin: "auto" }}
        >
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-2xl text-gray-900 mb-8">
              What Makes
              <br />
              <strong>Accurascore</strong> Different?
            </h2>

            {/* Feature Items */}
            <div className="space-y-6">
              {[
                {
                  title: "Unified Dashboard Experience",
                  desc: "One Platform, Total Control, Zero Hassle",
                  Icon: Monitor,
                },
                {
                  title: "Workflow That Matches Your Business",
                  desc: "We Adapt To You With Custom Workflows And Logic Switches",
                  Icon: Workflow,
                },
                {
                  title: "Built-In Financial Intelligence",
                  desc: "Budgeting, Cost Saving, Reporting, All Automated With Robust",
                  Icon: TrendingUp,
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-start space-x-4 bg-white p-3 rounded-lg mb-4 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,97,165,0.3)]"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-[#f6f6f6] group-hover:bg-[#0061a5]">
                    <feature.Icon className="w-6 h-6 text-gray-800 transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-700 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                padding: "25px 15px",
              }}
            >
              Book Demo
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Images/woman-typing.png"
                alt="Woman typing"
                className="w-150 h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - How It Works */}
        <div className="space-y-12" style={{ width: "90%", margin: "auto" }}>
          {/* First Row - Heading */}
          <div className="text-left" style={{ marginTop: "5rem" }}>
            <h2 className="text-2xl text-gray-900 mb-2">
              How It Works To Power Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              From Setup To Execution — See How Accurascore Simplifies
              Operations, Streamlines Workflows, And Puts You In Control.
            </p>
          </div>

          {/* Second Row - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
  {/* Feature 1 */}
  <div
    className="group space-y-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300"
    style={{
      textAlign: "left",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "20px",
    }}
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "#0061A5",
        margin: "unset",
        marginBottom: "15px",
      }}
    >
      <img src="/Icons/siri.png" alt="siri" />
    </div>
    <h3
      className="text-xl font-semibold text-gray-900"
      style={{ marginBottom: "5px" }}
    >
      Create Your Company
    </h3>
    <p className="text-gray-600">
      Create Your Workspace In Minutes — Then Invite Your Team To Collaborate.
    </p>
  </div>

  {/* Feature 2 */}
  <div
    className="group space-y-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300"
    style={{
      textAlign: "left",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "20px",
    }}
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "#0061A5",
        margin: "unset",
        marginBottom: "15px",
      }}
    >
      <img src="/Icons/workflow.png" alt="workflow" />
    </div>
    <h3
      className="text-xl font-semibold text-gray-900"
      style={{ marginBottom: "5px" }}
    >
      Build Custom Workflows
    </h3>
    <p className="text-gray-600">
      Adapt The Platform To Your Process, Not The Other Way Around No Templates
      Needed.
    </p>
  </div>

  {/* Feature 3 */}
  <div
    className="group space-y-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300"
    style={{
      textAlign: "left",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "20px",
    }}
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "#0061A5",
        margin: "unset",
        marginBottom: "15px",
      }}
    >
       <img src="/Icons/dashboard-browsing.png" alt="dashboard-browsing" />
    </div>
    <h3
      className="text-xl font-semibold text-gray-900"
      style={{ marginBottom: "5px" }}
    >
      All-in-One Control Panel
    </h3>
    <p className="text-gray-600">
      Stay On Top Of Operations, Finances, And Team Performance All In One
      Clean Interface.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
