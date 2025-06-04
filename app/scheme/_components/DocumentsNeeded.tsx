import { Building, FileText, MapPin, Shield } from "lucide-react";
import React from "react";

const documents = [
  {
    id: 1,
    title: "MSME Registration Certificate",
    icon: Building,
    required: true,
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    icon: FileText,
    required: true,
  },
  {
    id: 3,
    title: "Address Proof",
    icon: MapPin,
    required: true,
  },
  {
    id: 4,
    title: "Pollution Board Certificate",
    icon: Shield,
    required: true,
  },
];

const DocumentsNeeded = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            Documents Needed
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {documents.map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <div
                key={doc.id}
                className="flex items-center space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                style={{
                  animation: `slideInRight 0.6s ease-out ${
                    (index + 3) * 0.1
                  }s both`,
                }}
              >
                <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-300 hover:rotate-12">
                  <IconComponent className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-slate-800 transition-colors duration-300 hover:text-blue-600">
                    {doc.title}
                  </h3>
                  {doc.required && (
                    <span className="text-xs text-red-600 font-medium animate-pulse">
                      Required
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DocumentsNeeded;
