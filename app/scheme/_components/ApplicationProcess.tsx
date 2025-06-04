import { Calendar } from "lucide-react";
import React from "react";

const applicationSteps = [
  {
    id: 1,
    title: "Register on the TS-iPASS online portal",
    description: "Create your account and verify your details",
  },
  {
    id: 2,
    title: "Fill out the detailed application form",
    description: "Provide business and scheme details accurately",
  },
  {
    id: 3,
    title: "Pay the application processing fee",
    description: "Complete payment through secure gateway",
  },
  {
    id: 4,
    title: "Attend physical verification if required",
    description: "Schedule and attend verification meeting",
  },
  {
    id: 5,
    title: "Track application status online",
    description: "Monitor progress through the portal",
  },
];
const ApplicationProcess = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            Application Process
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {applicationSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 transition-all duration-300 hover:bg-slate-100 hover:scale-102 hover:shadow-md cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${(index + 4) * 0.1}s both`,
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm bg-slate-200 text-slate-600 transition-all duration-300 hover:bg-purple-100 hover:text-purple-600 hover:scale-110">
                {step.id}
              </div>

              <div className="flex-grow">
                <h3 className="font-medium text-slate-800 mb-1 transition-colors duration-300 hover:text-purple-600">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 transition-all duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
