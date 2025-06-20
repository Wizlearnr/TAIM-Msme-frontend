import { Users } from "lucide-react";
import React from "react";
import { useProfileActionContext } from "../_context/CreateEditProfileContext";

const WorkforceProfile = () => {
  const { register, errors } = useProfileActionContext();
  return (
    <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Workforce Profile</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Employee Count
          </label>
          <input
            {...register("total_employees", {
              required: "Total employee count is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Total employees must be a positive number",
              },
            })}
            type="number"
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter total employee count"
          />

          {errors.total_employees && (
            <p className="text-red-500 text-sm mt-1">
              {errors.total_employees.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Women Employees
          </label>
          <input
            {...register("women_employees", {
              required: "Women employee count is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Women employees must be a positive number",
              },
            })}
            type="number"
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter women employee count"
          />
          {errors.women_employees && (
            <p className="text-red-500 text-sm mt-1">
              {errors.women_employees.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkforceProfile;
