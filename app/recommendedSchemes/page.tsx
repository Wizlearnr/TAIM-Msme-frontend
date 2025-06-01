"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Building2,
  DollarSign,
  MapPin,
  Users,
  FileText,
  ExternalLink,
  Heart,
  MessageSquare,
  Factory,
  Briefcase,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

const MSMESchemesPage = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const businessProfile = {
    type: "Manufacturing",
    turnover: "50 Lakhs",
    district: "Hyderabad",
    sector: "Textiles",
  };

  const telanganaSchemes = [
    {
      id: 1,
      title:
        "TS-iPASS (Telangana State Industrial Project Approval and Self Certification System)",
      description:
        "Simplified process for obtaining licenses and clearances for industrial projects, including MSMEs.",
      type: "State Scheme",
      benefits: [
        "Single window clearance",
        "Reduced approval time",
        "Online tracking",
      ],
      eligibility: "All industrial projects in Telangana",
      funding: "Process facilitation",
    },
    {
      id: 2,
      title: "Subsidy Scheme for MSMEs",
      description:
        "Provides financial assistance through various subsidies for establishing and expanding MSMEs.",
      type: "State Scheme",
      benefits: [
        "Capital subsidy up to 25%",
        "Interest subsidy",
        "Power subsidy",
      ],
      eligibility: "MSMEs in manufacturing sector",
      funding: "Up to ₹25 lakhs",
    },
    {
      id: 3,
      title: "Marketing Assistance Scheme",
      description:
        "Supports MSMEs in marketing their products/services through exhibitions, trade fairs, etc.",
      type: "State Scheme",
      benefits: [
        "Exhibition participation support",
        "Marketing material assistance",
        "Digital marketing support",
      ],
      eligibility: "Registered MSMEs",
      funding: "Up to ₹2 lakhs per year",
    },
  ];

  const centralSchemes = [
    {
      id: 4,
      title:
        "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
      description:
        "Provides collateral-free credit facility to micro and small enterprises.",
      type: "Central Scheme",
      benefits: [
        "Collateral-free loans",
        "Credit guarantee up to ₹2 crores",
        "Reduced documentation",
      ],
      eligibility: "Micro and Small Enterprises",
      funding: "Credit guarantee up to ₹2 crores",
    },
    {
      id: 5,
      title: "Prime Minister Employment Generation Programme (PMEGP)",
      description:
        "Provides financial assistance for setting up new micro enterprises in rural and urban areas.",
      type: "Central Scheme",
      benefits: [
        "Margin money subsidy",
        "Skill development",
        "Employment generation",
      ],
      eligibility: "Above 18 years with minimum 8th standard education",
      funding: "Up to ₹25 lakhs for manufacturing",
    },
  ];

  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push("scheme");
  };

  const handleFeedbackClick = () => {
    router.push("/feedback");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceSubtle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGentle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes buttonWobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes pulseButton {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }

        .animate-button-wobble:hover {
          animation: buttonWobble 0.5s ease-in-out;
        }

        .animate-pulse-button {
          animation: pulseButton 2s infinite;
        }
      `}</style>
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Business Profile Section */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 mb-8 border border-blue-100 shadow-sm animate-fade-in-up">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md ">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 animate-slide-in-right">
              Your Business Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Business Type
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {businessProfile.type}
              </p>
            </div>

            <div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Annual Turnover
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {businessProfile.turnover}
              </p>
            </div>

            <div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  District
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {businessProfile.district}
              </p>
            </div>

            <div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <Factory className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Sector
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {businessProfile.sector}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Schemes */}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-slide-in-left">
            Recommended Schemes
          </h1>

          {/* Telangana Government Schemes */}
          <div
            className="bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 rounded-3xl p-8 mb-8 border border-emerald-100 shadow-sm animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 animate-slide-in-right">
                Telangana Gov Schemes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {telanganaSchemes.map((scheme, index) => (
                <div
                  key={scheme.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col h-full transform hover:scale-101 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <h3 className="font-bold text-gray-900 mb-3 duration-200 animate-text-glow">
                    {scheme.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {scheme.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full animate-pulse-gentle">
                        {scheme.type}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleMoreInfoClick}
                        className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-md animate-button-wobble"
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Government Schemes */}
          <div
            className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 mb-8 border border-purple-100 shadow-sm animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md ">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 animate-slide-in-right">
                Central Gov Schemes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {centralSchemes.map((scheme, index) => (
                <div
                  key={scheme.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col h-full transform hover:scale-101 animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <h3 className="font-bold text-gray-900 mb-3 duration-200">
                    {scheme.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {scheme.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full animate-pulse-gentle">
                        {scheme.type}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-md animate-button-wobble">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div
          className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 mt-8 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 animate-bounce-subtle">
              Was this helpful?
            </h3>
            <button onClick={handleFeedbackClick} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg animate-pulse-button">
              Give Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            © 2023 MSME Scheme Sahayak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MSMESchemesPage;
