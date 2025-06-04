import {
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  XCircle,
} from "lucide-react";
import React from "react";
const eligibilityCriteria = [
  {
    id: 1,
    title: "Registered as MSME in Telangana",
    status: "met",
    icon: Building,
    description:
      "Business must be registered under MSME category in Telangana state",
  },
  {
    id: 2,
    title: "Annual turnover between ₹20 Lac and ₹5 Cr",
    status: "met",
    icon: DollarSign,
    description:
      "Turnover should fall within the specified range for eligibility",
  },
  {
    id: 3,
    title: "Minimum 5 employees",
    status: "met",
    icon: Users,
    description: "Must maintain at least 5 full-time employees",
  },
  {
    id: 4,
    title: "Business operation started within last 3 years",
    status: "not-met",
    icon: Clock,
    description: "Business should be operational for maximum 3 years",
  },
];
const EligibilityCriteria = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 transition-all duration-300">
            Eligibility Criteria
          </h2>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {eligibilityCriteria.map((criteria, index) => {
          const IconComponent = criteria.icon;
          return (
            <div
              key={criteria.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-102 hover:shadow-md cursor-pointer"
              style={{
                animation: `slideInLeft 0.6s ease-out ${
                  (index + 2) * 0.1
                }s both`,
              }}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  criteria.status === "met" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {criteria.status === "met" ? (
                  <CheckCircle className="w-4 h-4 text-green-600 transition-all duration-300 hover:rotate-12" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600 transition-all duration-300 hover:rotate-12" />
                )}
              </div>

              <div className="flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-slate-300 hover:rotate-6">
                    <IconComponent className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1 transition-colors duration-300 hover:text-blue-600">
                      {criteria.title}
                    </h3>
                    <p className="text-sm text-slate-600 transition-all duration-300">
                      {criteria.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EligibilityCriteria;
