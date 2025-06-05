"use client";

import React from "react";
import BusinessProfile from "./_components/BusinessProfile";
import UpcomingDeadlines from "./_components/UpcommingDeadlines";
import Watchlist from "./_components/Watchlist";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Manage your business profile and track important schemes
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BusinessProfile />
          <UpcomingDeadlines />
        </div>

        {/* Watch List Section */}
        <div className="mb-8">
          <Watchlist />
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-gray-500 text-sm">© 2023 MSME Scheme Sahayak.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
