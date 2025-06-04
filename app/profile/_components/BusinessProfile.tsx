"use client";

import { useProfileContext } from "@/app/_context/ProfileContext";
import {
  Building2,
  Edit3,
  TrendingUp,
  MapPin,
  Users,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BusinessProfile = () => {
  const { selectedProfile } = useProfileContext();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  if (!selectedProfile) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <p className="text-gray-600">No business profile selected.</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
            <Building2 size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Business Profile</h2>
        </div>
        <button
          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 ${
            isHovered ? "shadow-lg" : "shadow-md"
          }`}
          onClick={() => {
            router.push("/profile/edit");
          }}
        >
          <Edit3 size={16} />
          Edit Profile
        </button>
      </div>

      <p className="text-gray-600 mb-6">Your registered business details</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Type:</label>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                {selectedProfile.sector}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">
              Turnover
            </label>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-600" />
              <span className="font-semibold text-gray-800">
                {selectedProfile.annual_turnover}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">
              District
            </label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <span className="font-semibold text-gray-800">
                {selectedProfile.city}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Sector</label>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-purple-600" />
              <span className="font-semibold text-gray-800">
                {selectedProfile.sub_sector}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <label className="text-sm font-medium text-gray-500">
            GST Number:
          </label>
          <div className="flex items-center gap-2 mt-1">
            <FileText size={16} className="text-orange-600" />
            <span className="font-mono font-semibold text-gray-800 bg-gray-50 px-3 py-1 rounded-lg">
              {selectedProfile.gst_number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
