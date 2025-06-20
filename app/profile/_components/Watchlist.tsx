"use client";
import StaticDataBadge from "@/components/StaticDataBadge";
import { telanganaSchemes } from "@/constants/schemes";
import { WatchList } from "@/models/watchlist";
import { useWatchLists } from "@/services/watchlist";
import { CheckCircle2, Info, Star } from "lucide-react";
import { useRouter } from "next/navigation";

type WatchListItemProps = {
  watchList: WatchList;
  index: number;
};
// Watch List Item Component

const WatchListItem: React.FC<WatchListItemProps> = ({ watchList, index }) => {
  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push("scheme");
  };

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
            {watchList.scheme_name}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {watchList.description}
          </p>
          {/* Uncomment if you want to show tags in the future */}
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {scheme.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div> */}

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
const Watchlist = () => {
  // const schemes = [

  //   {
  //     title: "PMEGP Scheme",
  //     description:
  //       "Prime Minister's Employment Generation Programme for new micro enterprises",
  //     tags: ["Manufacturing", "Subsidy", "Center Scheme", "Dec 2025"],
  //   },
  //   {
  //     title: "PMEGP Scheme",
  //     description:
  //       "Prime Minister's Employment Generation Programme for new micro enterprises",
  //     tags: ["Manufacturing", "Subsidy", "Center Scheme", "Dec 2025"],
  //   },
  // ];

  const { isLoading, error, data: watchlists = [] } = useWatchLists();
  const router = useRouter();
  const handleMoreInfoClick = () => {
    router.push("scheme");
  };

  // if (isLoading) {
  //   return (
  //     <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-pulse">
  //       <div className="flex items-center gap-3 mb-6">
  //         <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl text-white">
  //           <Star size={24} />
  //         </div>
  //         <h2 className="text-2xl font-bold text-gray-400">Loading...</h2>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
  //       <div className="flex items-center gap-3 mb-6">
  //         <div className="p-3 bg-red-500 rounded-xl text-white">
  //           <Star size={24} />
  //         </div>
  //         <h2 className="text-2xl font-bold text-red-800">
  //           Error loading watch list
  //         </h2>
  //       </div>
  //       <p className="text-red-600">Please try again later.</p>
  //     </div>
  //   );
  // }

  // if (!watchlists.length) {
  //   return (
  //     <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
  //       <div className="flex items-center gap-3 mb-6">
  //         <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl text-white">
  //           <Star size={24} />
  //         </div>
  //         <h2 className="text-2xl font-bold text-gray-800">
  //           No Schemes in Watch List
  //         </h2>
  //       </div>
  //       <p className="text-gray-600">
  //         You have not added any schemes to your watch list.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <StaticDataBadge />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl text-white">
          <Star size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Watch List</h2>
      </div>

      <div className="space-y-4">
        {/* {watchlists.map((watchlist, index) => (
          <WatchListItem key={index} watchList={watchlist} index={index} />
        ))} */}
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
      </div>
    </div>
  );
};

export default Watchlist;
