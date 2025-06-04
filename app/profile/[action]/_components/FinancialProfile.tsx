import React from "react";
import { useProfileActionContext } from "../_context/CreateEditProfileContext";
import { IndianRupee, ChevronDown } from "lucide-react";

const FinancialProfile = () => {
  const { register } = useProfileActionContext();
  return (
    <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <IndianRupee className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Financial Profile</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Assets Owned
          </label>
          <input
            {...register("total_assets")}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="e.g., machinery, vehicles, equipment"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Annual Turnover
          </label>
          <input
            {...register("annual_turnover")}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter annual turnover"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bank Loan Status
          </label>
          <div className="relative">
            <select
              {...register("bankLoanStatus")}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="Applied for loan">Applied for loan</option>
              <option value="Loan approved">Loan approved</option>
              <option value="Loan rejected">Loan rejected</option>
              <option value="No loan applied">No loan applied</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProfile;
