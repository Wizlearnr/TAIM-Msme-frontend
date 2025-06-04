"use client";

import { Sparkles, ArrowRight } from "lucide-react";

interface FindSchemesButtonProps {
  onClick: () => void;
}

const FindSchemesButton = ({ onClick }: FindSchemesButtonProps) => {
  return (
    <div className="flex items-center justify-center m-4">
      <button
        onClick={onClick}
        className="mt-6 max-w-3xl bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group/cta border border-white/20"
      >
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-5 h-5 group-hover/cta:animate-spin" />
          <span>Find Schemes</span>
          <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};

export default FindSchemesButton;