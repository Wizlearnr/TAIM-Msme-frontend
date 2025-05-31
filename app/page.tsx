"use client";
import { createBusinessProfile, UseBusinessProfiles } from "@/services/profile";
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateProfileModal from "./components/CreateProfile";
import ProfileCard from "./components/Profile";
import { BusinessProfile } from "@/models/business-profile";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

const SelectProfilePage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { data: profiles, isLoading, error } = UseBusinessProfiles();

  const [isSelecting, setIsSelecting] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const router = useRouter();

  const handleProfileSelect = async (profile: BusinessProfile) => {
    try {
      setIsSelecting(true);
      // Store JWT token and business_id in localStorage
      localStorage.setItem("auth_token", profile.token);
      localStorage.setItem("business_id", profile.id.toString());

      router.push("/welcome"); // Navigate to welcome page

      // Set selected profile and navigate to welcome
    } catch (err) {
      console.error("Profile selection failed:", err);
      alert("Failed to select profile. Please try again.");
    } finally {
      setIsSelecting(false);
    }
  };

  const handleCreateProfile = async (formData) => {
    try {
      setIsCreating(true);
      await createBusinessProfile(formData);
      alert(
        "Profile created successfully! (Note: This is a demo - profile won't appear in selection)"
      );
      setIsCreateModalOpen(false);
    } catch (err) {
      console.error("Profile creation failed:", err);
      alert("Failed to create profile. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleBackToSelect = () => {
    setSelectedProfile(null);
    // Clear stored data
    localStorage.removeItem("auth_token");
    localStorage.removeItem("business_id");
  };

  console.log("Profiles loaded:", profiles);

  // Main select profile screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes headerSlide {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <NavBar />
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
                onSelect={handleProfileSelect}
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
                Don't see your business type? Create a custom profile tailored
                to your needs.
              </p>

              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create Profile Modal */}
      <CreateProfileModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateProfile}
      />

      {/* Loading overlay for mutations */}
      {(isSelecting || isCreating) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div className="bg-white rounded-lg p-6 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 border-3 border-blue-600 border-t-transparent rounded-full"
                style={{ animation: "spin 1s linear infinite" }}
              />
              <span className="text-gray-700 font-medium">
                {isSelecting ? "Selecting profile..." : "Creating profile..."}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectProfilePage;
