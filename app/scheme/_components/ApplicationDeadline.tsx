import { Calendar } from "lucide-react";
import React from "react";

const ApplicationDeadline = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
      <div className="text-center">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:rotate-12 hover:scale-110">
          <Calendar className="w-6 h-6 text-orange-600" />
        </div>
        <h3 className="font-semibold text-slate-800 mb-2 transition-colors duration-300 hover:text-orange-600">
          Application Deadline
        </h3>
        <div
          className="text-2xl font-bold text-orange-600 mb-2 transition-all duration-300 hover:scale-110"
          style={{
            animation: "pulse 2s infinite",
          }}
        >
          Dec 31, 2025
        </div>
        <p className="text-sm text-slate-600">Don&apos;t miss out</p>
      </div>
    </div>
  );
};

export default ApplicationDeadline;
