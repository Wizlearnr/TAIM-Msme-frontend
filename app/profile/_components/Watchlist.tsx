"use client";
import { CheckCircle2, Info, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type WatchListItemProps = {
  scheme: {
    title: string;
    description: string;
    tags: string[];
  };
  index: number;
};
// Watch List Item Component

const WatchListItem: React.FC<WatchListItemProps> = ({ scheme, index }) => {
  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push("scheme");
  }

  return (
    <div
      className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-green-100 rounded-lg">
          <CheckCircle2 size={20} className="text-green-600" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-800 mb-2 text-lg">
            {scheme.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {scheme.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {scheme.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleMoreInfoClick}
            className="flex items-center gap-2 px-4 py-2 border border-blue-300 text-blue-600 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 hover:border-blue-400 hover:scale-105"
          >
            <Info size={16} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

// Watch List Component
const WatchList = () => {
  const schemes = [
    {
      title: "PMEGP Scheme",
      description:
        "Prime Minister's Employment Generation Programme for new micro enterprises",
      tags: ["Manufacturing", "Subsidy", "Center Scheme", "Dec 2025"],
    },
    {
      title: "PMEGP Scheme",
      description:
        "Prime Minister's Employment Generation Programme for new micro enterprises",
      tags: ["Manufacturing", "Subsidy", "Center Scheme", "Dec 2025"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl text-white">
          <Star size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Watch List</h2>
      </div>

      <div className="space-y-4">
        {schemes.map((scheme, index) => (
          <WatchListItem key={index} scheme={scheme} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
