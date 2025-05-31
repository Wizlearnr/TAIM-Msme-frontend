"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Lightbulb,
  CheckSquare,
  ArrowRight,
} from "lucide-react";
// import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function MSMEWelcomePage() {
  const [animateCards, setAnimateCards] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Tell us about your business",
      description: "Share your business details and requirements.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Get recommended schemes",
      description: "Receive a tailored list of relevant government schemes.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckSquare,
      title: "View personalized checklist",
      description: "Access a clear checklist for each scheme you choose.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 transform animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          {/* Government Logo */}
          {/* <Image
            src="/images/gov.png"
            alt="Government Logo"
            width={200}
            height={200}
            className="mx-auto mb-4"
          /> */}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MSME Scheme Sahayak
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-2">(సహాయక్)</p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get personalized guidance on MSME schemes from Telangana Government
          </p>
        </div>

        {/* How it Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;

              return (
                <div
                  key={index}
                  className={`relative group transform transition-all duration-700 ${
                    animateCards
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } ${isActive ? "scale-105" : "hover:scale-105"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                      isActive
                        ? "border-blue-200 shadow-blue-100/50"
                        : "border-transparent hover:border-gray-100"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                        step.color
                      } p-4 mb-6 mx-auto transform transition-transform duration-500 ${
                        isActive
                          ? "rotate-12 scale-110"
                          : "group-hover:rotate-6 group-hover:scale-105"
                      }`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent">
                        <ArrowRight className="absolute -top-2 right-0 w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center transform animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
          style={{ animationDelay: "800ms" }}
        >
          <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Chat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>

            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        © 2023 MSME Scheme Sahayak.
      </footer>
    </div>
  );
}
