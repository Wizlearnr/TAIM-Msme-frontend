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
import { createBusinessProfile } from "@/services/profile";
import { useMutation } from "@tanstack/react-query";
import { useProfileContext } from "@/app/_context/ProfileContext";

interface ContextType {
  errors: FieldErrors<BusinessProfile>;
  onSubmit: (e: any) => void;
  register: UseFormRegister<BusinessProfile>;
  promoters: Promoter[];
  addPromoter: () => void;
  removePromoter: (index: number) => void;

  isPending?: boolean;
  networkError?: Error | null;
}

const ProfileActionContext = createContext<ContextType | undefined>(undefined);

export const ProfileActionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const params = useParams();
  const actionParam = params?.action as "create" | "edit";

  const { handleSelectProfile, selectedProfile } = useProfileContext();

  const { mutate, isPending, error } = useMutation({
    mutationFn: createBusinessProfile,
    onSuccess: (data) => {
      handleSelectProfile(data);
    },
    onError: (error) => {
      console.error("Error creating profile:", error);
    },
  });

  const initialData = useMemo(() => {
    if (actionParam === "edit") {
      return selectedProfile!;
    }
    return defaultFormData;
  }, [actionParam, selectedProfile]);

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
    console.log("Form submitted with data:", data);
    // Here you can handle the form submission, e.g., send data to an API
    // For now, we just log the data to the console
    if (actionParam === "create") {
      mutate(data);
    }

    if (actionParam === "edit") {
      // Handle edit logic here
      console.log("Editing profile with data:", data);
    }
  });

  const value: ContextType = {
    errors,
    onSubmit,
    register,
    promoters: fields,
    addPromoter,
    removePromoter,
    isPending,
    networkError: error,
  };

  return (
    <ProfileActionContext.Provider value={value}>
      {children}
    </ProfileActionContext.Provider>
  );
};

export const useProfileActionContext = () => {
  const context = useContext(ProfileActionContext);
  if (context === undefined) {
    throw new Error(
      "useProfileAction must be used within a ProfileActionProvider"
    );
  }
  return context;
};
