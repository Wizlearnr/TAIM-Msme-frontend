import { ExternalLink, Download, MessageCircle } from "lucide-react";
import React from "react";

const UsefulLinks = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 hover:rotate-12">
          <ExternalLink className="w-3 h-3 text-blue-600" />
        </div>
        Useful Links
      </h3>

      <div className="space-y-3">
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <ExternalLink className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
            Official TS-iPASS Portal
          </span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Download className="w-4 h-4 text-green-600" />
          </div>
          <span className="text-sm text-slate-700 group-hover:text-green-600 transition-colors duration-300">
            Download Application Guidelines
          </span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md"
        >
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <MessageCircle className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-sm text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
            Contact TS-iPASS Support
          </span>
        </a>
      </div>
    </div>
  );
};

export default UsefulLinks;
