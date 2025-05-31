"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { Promoter, BusinessProfile } from "@/models/business-profile";
import {
  useForm,
  useFieldArray,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface ContextType {
  errors: FieldErrors<BusinessProfile>;
  onSubmit: (e: any) => void;
  register: UseFormRegister<BusinessProfile>;
  promoters: Promoter[];
  addPromoter: () => void;
  removePromoter: (index: number) => void;
}

const defaultFormData: BusinessProfile = {
  id: 0,
  token: "",
  icon: "",
  companyName: "",
  contactPerson: "",
  email: "",
  phoneNumber: "",
  sector: "",
  subSector: "",
  enterpriseType: "",
  address: "",
  city: "",
  pincode: "",
  assetsOwned: "",
  annualTurnover: "",
  bankLoanStatus: "",
  employeeCount: "",
  womenEmployees: "",
  yearsOfOperation: "",
  commencementDate: "",
  legalEntityType: "",
  gstNumber: "",
  promoters: [
    {
      name: "",
      age: "",
      aadhar: "",
      pan: "",
      gender: "",
      category: "",
      sharePercentage: "",
    },
  ],
};

const ProfileActionContext = createContext<ContextType | undefined>(undefined);

export const ProfileActionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessProfile>({
    defaultValues: defaultFormData,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "promoters",
  });

  const addPromoter = () => {
    append({
      name: "",
      age: "",
      aadhar: "",
      pan: "",
      gender: "",
      category: "",
      sharePercentage: "",
    });
  };

  const removePromoter = (index: number) => {
    remove(index);
  };

  const onSubmit = handleSubmit((data: BusinessProfile) => {
    console.log("Form submitted:", data);
  });

  const value: ContextType = {
    errors,
    onSubmit,
    register,
    promoters: fields,
    addPromoter,
    removePromoter,
  };

  return (
    <ProfileActionContext.Provider value={value}>
      {children}
    </ProfileActionContext.Provider>
  );
};

export const useProfileAction = () => {
  const context = useContext(ProfileActionContext);
  if (context === undefined) {
    throw new Error(
      "useProfileAction must be used within a ProfileActionProvider"
    );
  }
  return context;
};
