"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  FileText, 
  Calendar,
  ExternalLink,
  Download,
  MessageCircle,
  Building,
  Users,
  DollarSign,
  Clock,
  MapPin,
  Shield,
  Zap,
  BarChart3,
  Factory
} from 'lucide-react';


const TSiPASSPortal = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string>();

  useEffect(() => {
    setMounted(true);
  }, []);

  const eligibilityCriteria = [
    {
      id: 1,
      title: "Registered as MSME in Telangana",
      status: "met",
      icon: Building,
      description: "Business must be registered under MSME category in Telangana state"
    },
    {
      id: 2,
      title: "Annual turnover between ₹20 Lac and ₹5 Cr",
      status: "met",
      icon: DollarSign,
      description: "Turnover should fall within the specified range for eligibility"
    },
    {
      id: 3,
      title: "Minimum 5 employees",
      status: "met",
      icon: Users,
      description: "Must maintain at least 5 full-time employees"
    },
    {
      id: 4,
      title: "Business operation started within last 3 years",
      status: "not-met",
      icon: Clock,
      description: "Business should be operational for maximum 3 years"
    }
  ];

  const documents = [
    {
      id: 1,
      title: "MSME Registration Certificate",
      icon: Building,
      required: true
    },
    {
      id: 2,
      title: "GST Registration Certificate",
      icon: FileText,
      required: true
    },
    {
      id: 3,
      title: "Address Proof",
      icon: MapPin,
      required: true
    },
    {
      id: 4,
      title: "Pollution Board Certificate",
      icon: Shield,
      required: true
    }
  ];

  const applicationSteps = [
    {
      id: 1,
      title: "Register on the TS-iPASS online portal",
      description: "Create your account and verify your details"
    },
    {
      id: 2,
      title: "Fill out the detailed application form",
      description: "Provide business and scheme details accurately"
    },
    {
      id: 3,
      title: "Pay the application processing fee",
      description: "Complete payment through secure gateway"
    },
    {
      id: 4,
      title: "Attend physical verification if required",
      description: "Schedule and attend verification meeting"
    },
    {
      id: 5,
      title: "Track application status online",
      description: "Monitor progress through the portal"
    }
  ];

  const fadeInUp = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.6s ease-out'
  };

  const staggerDelay = (index: number) => ({
    ...fadeInUp,
    transitionDelay: `${index * 0.1}s`
  });

  const scaleAnimation = {
    transform: 'scale(1)',
    transition: 'transform 0.2s ease-in-out'
  };

  const hoverScale = {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-in-out'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="text-center mb-8" style={fadeInUp}>
          <h1 
            className="text-3xl font-bold text-slate-800 mb-4 transition-all duration-300 hover:scale-105"
            style={{
              animation: mounted ? 'slideInDown 0.8s ease-out' : 'none'
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
            <div 
              className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
              style={staggerDelay(1)}
              onMouseEnter={() => setHoveredCard('eligibility')}
              onMouseLeave={() => setHoveredCard(undefined)}
            >
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
                        ...staggerDelay(index + 2),
                        animation: mounted ? `slideInLeft 0.6s ease-out ${(index + 2) * 0.1}s both` : 'none'
                      }}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        criteria.status === 'met' 
                          ? 'bg-green-100' 
                          : 'bg-red-100'
                      }`}>
                        {criteria.status === 'met' ? (
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

            {/* Documents Needed */}
            <div 
              className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
              style={staggerDelay(2)}
              onMouseEnter={() => setHoveredCard('documents')}
              onMouseLeave={() => setHoveredCard(undefined)}
            >
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">Documents Needed</h2>
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
                          ...staggerDelay(index + 3),
                          animation: mounted ? `slideInRight 0.6s ease-out ${(index + 3) * 0.1}s both` : 'none'
                        }}
                      >
                        <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-300 hover:rotate-12">
                          <IconComponent className="w-4 h-4 text-slate-600" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-slate-800 transition-colors duration-300 hover:text-blue-600">{doc.title}</h3>
                          {doc.required && (
                            <span className="text-xs text-red-600 font-medium animate-pulse">Required</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div 
              className="bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
              style={staggerDelay(3)}
              onMouseEnter={() => setHoveredCard('process')}
              onMouseLeave={() => setHoveredCard(undefined)}
            >
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">Application Process</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {applicationSteps.map((step, index) => (
                    <div 
                      key={step.id}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 transition-all duration-300 hover:bg-slate-100 hover:scale-102 hover:shadow-md cursor-pointer"
                      style={{
                        ...staggerDelay(index + 4),
                        animation: mounted ? `fadeInUp 0.6s ease-out ${(index + 4) * 0.1}s both` : 'none'
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Deadline */}
            <div 
              className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105" 
              style={staggerDelay(4)}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 transition-colors duration-300 hover:text-orange-600">Application Deadline</h3>
                <div 
                  className="text-2xl font-bold text-orange-600 mb-2 transition-all duration-300 hover:scale-110"
                  style={{
                    animation: mounted ? 'pulse 2s infinite' : 'none'
                  }}
                >
                  Dec 31, 2025
                </div>
                <p className="text-sm text-slate-600">Don't miss out</p>
              </div>
            </div>

            {/* Useful Links */}
            <div 
              className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
              style={staggerDelay(5)}
            >
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 hover:rotate-12">
                  <ExternalLink className="w-3 h-3 text-blue-600" />
                </div>
                Useful Links
              </h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors duration-300">Official TS-iPASS Portal</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Download className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-green-600 transition-colors duration-300">Download Application Guidelines</span>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 group hover:scale-105 hover:shadow-md">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <MessageCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-purple-600 transition-colors duration-300">Contact TS-iPASS Support</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                ...staggerDelay(6),
              }}
            >
              Add to Watch List
            </button>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="text-center mt-12 pt-8 border-t border-slate-200 transition-all duration-300 hover:scale-105" 
          style={staggerDelay(7)}
        >
          <p className="text-sm text-slate-500">© 2023 MSME Scheme Sahayak</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default TSiPASSPortal;