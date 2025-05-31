"use client";
import React from "react";
import { Save, X } from "lucide-react";
import BasicInformation from "./_components/BasicInformation";
import { useProfileActionContext } from "./_context/CreateEditProfileContext";
import LocationDetails from "./_components/LocationDetails";
import FinancialProfile from "./_components/FinancialProfile";
import WorkforceProfile from "./_components/WorkforceProfile";
import { useRouter } from "next/navigation";

const ProfileActionPage = () => {
  const { onSubmit, isPending, networkError } = useProfileActionContext();
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={onSubmit} className="p-8 space-y-8">
            {/* Basic Information Section */}
            <BasicInformation />
            {/* Location Details Section */}
            <LocationDetails />
            {/* Financial Profile Section */}
            <FinancialProfile />
            {/* Workforce Profile Section */}
            <WorkforceProfile />
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-8 border-t border-gray-200">
              <button
                type="button"
                disabled={isPending}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2disabled:cursor-not-allowed"
                onClick={handleCancel}
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isPending}
              >
                <Save className="w-5 h-5" />

                <span>{isPending ? "Saving..." : "Save Changes"}</span>
              </button>
            </div>

            {networkError && (
              <div className="mt-4 text-red-600 text-sm">
                {networkError.message || "An error occurred. Please try again."}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileActionPage;
