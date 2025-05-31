import React from "react";
import { useProfileAction } from "../_context/CreateEditProfileContext";
import {
  Building2,
  User,
  Mail,
  Phone,
  Calendar,
  ChevronDown,
  Plus,
  Trash2,
} from "lucide-react";

const BasicInformation = () => {
  const { errors, register, promoters, addPromoter, removePromoter } =
    useProfileAction();

  return (
    <div className="space-y-8 animate-in slide-in-from-right-5 duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <Building2 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            {...register("companyName", {
              required: "Company name is required",
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 bg-white text-gray-900 placeholder-gray-500"
            placeholder="Enter company name"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Contact Person
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("contactPerson", {
                required: "Contact person is required",
              })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter contact person name"
            />
          </div>
          {errors.contactPerson && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactPerson.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="bg-white text-gray-900 placeholder-gray-500 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
              placeholder="Enter phone number"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Years of Operation
          </label>
          <input
            {...register("yearsOfOperation", {
              required: "Years of operation is required",
            })}
            type="number"
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter years of operation"
          />
          {errors.yearsOfOperation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.yearsOfOperation.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Commencement
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("commencementDate", {
                required: "Commencement date is required",
              })}
              type="date"
              className="bg-white text-gray-900 placeholder-gray-500 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            />
          </div>
          {errors.commencementDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.commencementDate.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Legal Entity Type
          </label>
          <div className="relative">
            <select
              {...register("legalEntityType", {
                required: "Legal entity type is required",
              })}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="">Select legal entity type</option>
              <option value="sole-proprietor">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="pvt-ltd">Private Limited</option>
              <option value="ltd">Limited Company</option>
              <option value="llp">Limited Liability Partnership</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
          {errors.legalEntityType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.legalEntityType.message}
            </p>
          )}
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            GST Number / UDYAM No.
          </label>
          <input
            {...register("gstNumber", {
              required: "GST/UDYAM number is required",
            })}
            className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300"
            placeholder="Enter GST or UDYAM number"
          />
          {errors.gstNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gstNumber.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sector
          </label>
          <div className="relative">
            <select
              {...register("sector")}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="Technology">Technology</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Services</option>
              <option value="Agriculture">Agriculture</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sub Sector
          </label>
          <div className="relative">
            <select
              {...register("subSector")}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Type of Enterprise
          </label>
          <div className="relative">
            <select
              {...register("enterpriseType")}
              className="bg-white text-gray-900 placeholder-gray-500 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 group-hover:border-indigo-300 appearance-none"
            >
              <option value="Micro">Micro</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Promoters Section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Promoters</h3>
          <button
            type="button"
            onClick={addPromoter}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Promoter</span>
          </button>
        </div>

        {promoters.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No promoters added yet. Click &quot;Add Promoter&quot; to get
            started.
          </p>
        ) : (
          <div className="space-y-4">
            {promoters.map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">
                    Promoter {index + 1}
                  </h4>
                  <button
                    type="button"
                    onClick={() => removePromoter(index)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      {...register(`promoters.${index}.name`, {
                        required: "Name is required",
                      })}
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      {...register(`promoters.${index}.age`, {
                        required: "Age is required",
                      })}
                      type="number"
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aadhar
                    </label>
                    <input
                      {...register(`promoters.${index}.aadhar`, {
                        required: "Aadhar is required",
                      })}
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter Aadhar number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN
                    </label>
                    <input
                      {...register(`promoters.${index}.pan`, {
                        required: "PAN is required",
                      })}
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter PAN number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      {...register(`promoters.${index}.gender`, {
                        required: "Gender is required",
                      })}
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      {...register(`promoters.${index}.category`, {
                        required: "Category is required",
                      })}
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="General">General</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="OBC">OBC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Share %
                    </label>
                    <input
                      {...register(`promoters.${index}.sharePercentage`, {
                        required: "Share percentage is required",
                      })}
                      type="number"
                      min="0"
                      max="100"
                      className="bg-white text-gray-900 placeholder-gray-500 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter share %"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInformation;
