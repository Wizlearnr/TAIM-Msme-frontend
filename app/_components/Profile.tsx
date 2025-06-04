"use client";
import { IconMap } from "@/constants/icons";
import { BusinessProfile } from "@/models/business-profile";
import { Building2, ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  profile: BusinessProfile;
  onSelect: (profile: BusinessProfile) => void;
  index: number;
};

const ProfileCard = ({ profile, onSelect, index }: Props) => {
  const IconComponent = IconMap[profile.icon] || Building2;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        opacity: 0,
        transform: "translateY(50px)",
        animation: `slideUp 0.6s ease-out ${index * 0.1}s forwards`,
      }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 group transform hover:scale-105 hover:-translate-y-1"
      onClick={() => onSelect(profile)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-blue-100 to-indigo-100"
          }`}
          style={{
            transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 0.8s ease-in-out, background 0.3s ease",
          }}
        >
          <IconComponent
            className={`w-8 h-8 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-blue-600"
            }`}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {profile.business_name}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {profile.sector} - {profile.sub_sector}
          </p>
          {/* <p className="text-xs text-gray-400 leading-relaxed">
            {profile.phoneNumber}
          </p> */}
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg transform group-hover:scale-102">
          <span>Select</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
