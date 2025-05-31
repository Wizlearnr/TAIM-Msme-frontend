"use client";
import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { Promoter, BusinessProfile } from "@/models/business-profile";
import {
  useForm,
  useFieldArray,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { useParams } from "next/navigation";
import { defaultFormData } from "../_constant";

interface ContextType {
  errors: FieldErrors<BusinessProfile>;
  onSubmit: (e: any) => void;
  register: UseFormRegister<BusinessProfile>;
  promoters: Promoter[];
  addPromoter: () => void;
  removePromoter: (index: number) => void;
}

const ProfileActionContext = createContext<ContextType | undefined>(undefined);

export const ProfileActionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const params = useParams();
  const actionParam = params?.action as "create" | "edit";

  const initialData = useMemo(() => {
    if (actionParam === "edit") {
      return defaultFormData;
    }
    return defaultFormData;
  }, [actionParam]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessProfile>({
    defaultValues: initialData,
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
