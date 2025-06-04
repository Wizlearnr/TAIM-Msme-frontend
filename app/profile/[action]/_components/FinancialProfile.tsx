import React from "react";
import { useProfileActionContext } from "../_context/CreateEditProfileContext";
import { IndianRupee, ChevronDown } from "lucide-react";

const FinancialProfile = () => {
  const { register, errors } = useProfileActionContext();
  return (
    <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <IndianRupee className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Financial Profile</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Assets Owned
          </label>
          <input
            {...register("total_assets", {
              required: "Total assets are required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Total assets must be a positive number",
              },
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="e.g., machinery, vehicles, equipment"
          />
          {errors.total_assets && (
            <p className="text-red-500 text-sm mt-1">
              {errors.total_assets.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Annual Turnover
          </label>
          <input
            {...register("annual_turnover", {
              required: "Annual turnover is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Annual turnover must be a positive number",
              },
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter annual turnover"
          />
          {errors.annual_turnover && (
            <p className="text-red-500 text-sm mt-1">
              {errors.annual_turnover.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Liabilities
          </label>
          <input
            {...register("total_liabilities", {
              required: "Total liabilities are required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Total liabilities must be a positive number",
              },
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter total liabilities"
            type="number"
            min={0}
          />
          {errors.total_liabilities && (
            <p className="text-red-500 text-sm mt-1">
              {errors.total_liabilities.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Revenue
          </label>
          <input
            {...register("total_revenue", {
              required: "Total revenue is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Total revenue must be a positive number",
              },
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter total revenue"
            type="number"
            min={0}
          />
          {errors.total_revenue && (
            <p className="text-red-500 text-sm mt-1">
              {errors.total_revenue.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Investment Amount
          </label>
          <input
            {...register("investment_amount", {
              required: "Investment amount is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Investment amount must be a positive number",
              },
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter investment amount"
            type="number"
            min={0}
          />
          {errors.investment_amount && (
            <p className="text-red-500 text-sm mt-1">
              {errors.investment_amount.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bank Loan Status
          </label>
          <div className="relative">
            <select
              defaultValue=""
              {...register("bank_loan_status", {
                required: "Bank loan status is required",
              })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="" disabled>
                Select loan status
              </option>
              <option value="Applied for loan">Applied for loan</option>
              <option value="Loan approved">Loan approved</option>
              <option value="Loan rejected">Loan rejected</option>
              <option value="No loan applied">No loan applied</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
          {errors.bank_loan_status && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bank_loan_status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancialProfile;
