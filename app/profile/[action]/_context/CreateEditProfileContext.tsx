"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import { Promoter, BusinessProfile } from "@/models/business-profile";
import {
  useForm,
  useFieldArray,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { defaultFormData } from "../_constant";
import {
  createBusinessProfile,
  updateBusinessProfile,
} from "@/services/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const router = useRouter();

  const { handleSelectProfile, selectedProfile, updateProfileData } =
    useProfileContext();

  const { mutate, isPending, error } = useMutation<
    BusinessProfile,
    Error,
    BusinessProfile
  >({
    mutationFn: (data) => {
      console.log("Mutation function called with data:", data);
      if (actionParam === "edit") {
        return updateBusinessProfile(data);
      }
      console.log("Creating profile with data:", data);
      return createBusinessProfile(data);
    },
    onSuccess: (data) => {
      if (actionParam === "edit") {
        queryClient.invalidateQueries({ queryKey: ["businessProfiles"] });
        updateProfileData(data);
        router.back();
        return;
      }

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
    reset,
  } = useForm<BusinessProfile>({
    defaultValues: initialData,
  });

  // Reset form when data becomes available
  useEffect(() => {
    if (actionParam === "edit" && selectedProfile) {
      reset(selectedProfile);
    }
  }, [actionParam, selectedProfile, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "promoters",
  });

  const addPromoter = () => {
    append({
      name: "",
      age: "",
      aadhar_card: "",
      pan: "",
      gender: "",
      category: "",
      share_percent: "",
    });
  };

  const removePromoter = (index: number) => {
    remove(index);
  };

  const onSubmit = handleSubmit((d) => mutate(d));

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
