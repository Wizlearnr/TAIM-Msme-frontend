import React from "react";
import { Database, Clock, Sparkles } from "lucide-react";

export default function StaticDataBadge() {
  return (
    <div className="absolute top-4 right-4 z-40 animate-bounce-slow">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-lg border border-amber-400/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-4 h-4 animate-pulse" />
          <div className="font-semibold text-sm leading-tight">Static data</div>
          <div className="w-2 h-2 bg-amber-300 rounded-full animate-ping"></div>
        </div>

        <div className="flex items-center gap-2 text-xs opacity-90">
          <Clock className="w-3 h-3" />
          <span>Feature Coming soon</span>
          <Sparkles className="w-3 h-3 animate-spin" />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
