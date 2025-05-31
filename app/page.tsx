"use client";
import { Plus } from "lucide-react";
import ProfileCard from "./_components/Profile";
import { useRouter } from "next/navigation";
import { useProfileContext } from "./_context/ProfileContext";
const SelectProfilePage = () => {
  const { handleSelectProfile, profiles, isLoading, error } =
    useProfileContext();
  const router = useRouter();

  const handleCreateProfile = async () => {
    router.push("/profile/create");
  };

  // Main select profile screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div
          className="text-center mb-12"
          style={{ animation: "titleFade 0.8s ease-out 0.2s both" }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Select Your Business Profile
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our pre-configured business profiles or create your own
            to get started with MSME schemes and support.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div
              className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
              style={{ animation: "spin 1s linear infinite" }}
            />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            className="text-center py-12"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            <p className="text-red-600 text-lg">
              Failed to load profiles. Please try again.
            </p>
          </div>
        )}

        {/* Profiles Grid */}
        {!isLoading && !error && profiles && profiles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onSelect={handleSelectProfile}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Create New Profile Section */}
        {!isLoading && (
          <div
            className="max-w-md mx-auto"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-dashed border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-180">
                <Plus className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Create New Profile
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Dont see your business type? Create a custom profile tailored to
                your needs.
              </p>

              <button
                onClick={handleCreateProfile}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectProfilePage;
