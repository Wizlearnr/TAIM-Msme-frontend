"use client";

import { User, Bell, X, Calendar } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
const NavBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <Image
                src="/images/logo.png"
                alt="MSME Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MSME Scheme Sahayak
            </h1>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transform animate-in slide-in-from-top-2">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">
                    Upcoming Deadlines
                  </h3>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">PMEGP Scheme</p>
                      <p className="text-sm text-gray-600">
                        Deadline: 31 Dec 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">PMEGP Scheme</p>
                      <p className="text-sm text-gray-600">
                        Deadline: 31 Dec 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
