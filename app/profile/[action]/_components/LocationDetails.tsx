import React from "react";
import { useProfileActionContext } from "../_context/CreateEditProfileContext";
import { MapPin } from "lucide-react";

const LocationDetails = () => {
  const { register, errors } = useProfileActionContext();
  return (
    <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <MapPin className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Location Details</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address
          </label>
          <textarea
            {...register("address", {
              required: "Address is required",
            })}
            rows={3}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter complete address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <input
              {...register("city", { required: "City is required" })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>
            <input
              {...register("state", { required: "State is required" })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter state"
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pincode
            </label>
            <input
              {...register("pincode", {
                required: "Pincode is required",
              })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter pincode"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pincode.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
