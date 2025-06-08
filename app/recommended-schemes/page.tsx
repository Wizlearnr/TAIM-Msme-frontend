"use client";

import React from "react";
import {
  Building2,
  DollarSign,
  MapPin,
  FileText,
  Factory,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useRecommendedSchemes } from "@/services/schemes";
import { useProfileContext } from "../_context/ProfileContext";
import MarkdownPreview from "@uiw/react-markdown-preview";

const MSMESchemesPage = () => {
  const router = useRouter();

  const { data: schemes, isLoading, error } = useRecommendedSchemes();
  const { selectedProfile } = useProfileContext();

  // const handleMoreInfoClick = () => {
  //   router.push("/scheme");
  // };

  const handleFeedbackClick = () => {
    router.push("/feedback");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
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
                  Business Name
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {selectedProfile?.business_name}
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
                {selectedProfile?.annual_turnover}
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
                <span className="text-sm font-medium text-gray-600">City</span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {selectedProfile?.city}
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
                {selectedProfile?.sector}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Schemes */}
        <div className="space-y-8 bg-white rounded-3xl shadow-sm border border-gray-200 p-8 mt-8 animate-fade-in-up min-h-[400px]">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-slide-in-left">
            Recommended Schemes
          </h1>

          {/* Telangana Government Schemes */}
          {/* <div
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
          </div> */}

          {/* Central Government Schemes */}
          {/* <div
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
            
          </div> */}

          <div className="flex flex-col items-center justify-center m-4 min-h-[400px]">
            {isLoading && (
              <div className="flex items-center justify-center text-gray-500 animate-fade-in-up">
                <h2 className="text-lg font-semibold">Loading...</h2>
                <Loader2 className="inline-block animate-spin ml-2 w-5 h-5 text-blue-500" />
              </div>
            )}
            {error && (
              <div className="text-center text-red-500 animate-fade-in-up">
                Error loading schemes. Please try again later.
              </div>
            )}
            {!isLoading && !error && (
              <MarkdownPreview
                source={schemes!.replaceAll("\n", "<br />")}
                wrapperElement={{
                  "data-color-mode": "light",
                }}
                style={{
                  background: "transparent",
                }}
              />
            )}
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
            <button
              onClick={handleFeedbackClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg animate-pulse-button"
            >
              Give Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-sm text-gray-600 font-medium">
            © 2025 MSME Scheme Sahayak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MSMESchemesPage;
