"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { BusinessProfile } from "@/models/business-profile";
import { useBusinessProfiles } from "@/services/profile";
import { useRouter } from "next/navigation";
import {
  getSelectedProfileFromLS,
  getSessionDataFromLS,
} from "@/utils/localstorage";
import { useMutation } from "@tanstack/react-query";
import { createSession } from "@/services/session";
import { Session } from "@/models/session";
import { Message } from "@/models/message";

type ContextType = {
  selectedProfile: BusinessProfile | null;
  session: Session | null;

  handleSelectProfile: (profile: BusinessProfile) => void;

  isLoading: boolean;
  error: Error | null;

  profiles: BusinessProfile[];
  messages: Message[];
  setMessages:  Dispatch<SetStateAction<Message[]>>
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
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      query: "",
      answer: "Hi there! How can I assist you today?",
      status: "neutral",
    }
  ]);

  const { isLoading, error, data: profiles } = useBusinessProfiles();

  const { mutate: createNewSession } = useMutation({
    mutationFn: () => {
      return createSession();
    },
    onSuccess: (data) => {
      // Handle successful session creation if needed
      console.log("Session created successfully:", data);
      localStorage.setItem("session", JSON.stringify(data));
      setSession(data);
    },
  });

  const logout = () => {
    handleSelectProfile(null);
    setMessages([]);
    router.refresh();
  };

  useEffect(() => {
    // Load the selected profile from local storage or any other source
    const storedProfile = getSelectedProfileFromLS();
    const sessionData = getSessionDataFromLS();

    if (!storedProfile || !sessionData) {
      router.replace("/");
      return;
    }

    setSelectedProfile(storedProfile);
    setSession(sessionData);
  }, [router]);

  const handleSelectProfile = useCallback(
    (profile: BusinessProfile | null) => {
      setSelectedProfile(profile);
      localStorage.setItem("selectedProfile", JSON.stringify(profile));
      createNewSession();

      if (profile) {
        // Navigate to the dashboard or profile page
        router.push("/welcome");
      } else {
        // If no profile is selected, redirect to the select profile page
        router.push("/");
      }
    },
    [createNewSession, router]
  );

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        error,
        selectedProfile,
        handleSelectProfile,

        profiles: profiles || [],
        messages: messages || [],
        setMessages,
        session,
        logout,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
