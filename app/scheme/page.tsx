"use client";

import React from "react";
import { Zap } from "lucide-react";
import EligibilityCriteria from "./_components/EligibilityCriteria";
import DocumentsNeeded from "./_components/DocumentsNeeded";
import ApplicationProcess from "./_components/ApplicationProcess";
import ApplicationDeadline from "./_components/ApplicationDeadline";
import UsefulLinks from "./_components/UsefulLinks";

const TSiPASSPortal = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold text-slate-800 mb-4 transition-all duration-300 hover:scale-105"
            style={{
              animation: "slideInDown 0.8s ease-out",
            }}
          >
            Telangana State Industrial Policy
          </h1>
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>TS-iPASS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Eligibility Criteria */}
            <EligibilityCriteria />

            {/* Documents Needed */}
            <DocumentsNeeded />

            {/* Application Process */}
            <ApplicationProcess />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Deadline */}
            <ApplicationDeadline />

            {/* Useful Links */}
            <UsefulLinks />

            {/* CTA Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Add to Watch List
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 transition-all duration-300 hover:scale-105">
          <p className="text-sm text-slate-500">© 2025 MSME Scheme Sahayak</p>
        </div>
      </div>
    </div>
  );
};

export default TSiPASSPortal;
