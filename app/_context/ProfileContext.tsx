"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { BusinessProfile } from "@/models/business-profile";
import { useBusinessProfiles } from "@/services/profile";
import { useRouter } from "next/navigation";
import { getSelectedProfileFromLS } from "@/utils/localstorage";

type ContextType = {
  selectedProfile: BusinessProfile | null;

  handleSelectProfile: (profile: BusinessProfile) => void;

  isLoading: boolean;
  error: Error | null;

  profiles: BusinessProfile[];
  logout: () => void;
};

export const ProfileContext = createContext<ContextType | undefined>(undefined);

export const useProfileContext = (): ContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

const ProfileContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [selectedProfile, setSelectedProfile] =
    useState<BusinessProfile | null>(null);

  const { isLoading, error, data: profiles } = useBusinessProfiles();

  const logout = () => {
    handleSelectProfile(null);
    router.refresh();
  };

  useEffect(() => {
    // Load the selected profile from local storage or any other source
    const storedProfile = getSelectedProfileFromLS();

    if (!storedProfile) {
      router.replace("/");
      return;
    }

    setSelectedProfile(storedProfile);
  }, [router]);

  const handleSelectProfile = useCallback(
    (profile: BusinessProfile | null) => {
      setSelectedProfile(profile);
      localStorage.setItem("selectedProfile", JSON.stringify(profile));

      if (profile) {
        // Navigate to the dashboard or profile page
        router.push("/welcome");
      } else {
        // If no profile is selected, redirect to the select profile page
        router.push("/");
      }
    },
    [router]
  );

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        error,
        selectedProfile,
        handleSelectProfile,

        profiles: profiles || [],
        logout,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
