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
  setMessages: Dispatch<SetStateAction<Message[]>>;
  updateProfileData: (profile: BusinessProfile) => void;
  logout: () => void;
  creatingSession: boolean;
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
  const [messages, setMessages] = useState<Message[]>([]);

  const { isLoading, error, data: profiles } = useBusinessProfiles();

  const [creatingSession, setCreatingSession] = useState(false);

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
    setMessages([
      {
        query: "",
        answer: sessionData?.answer || "",
        status: "neutral",
      },
    ]);
    router.replace("/welcome");
  }, [router]);

  const handleSelectProfile = useCallback(
    async (profile: BusinessProfile | null) => {
      setSelectedProfile(profile);
      setCreatingSession(true);
      localStorage.setItem("selectedProfile", JSON.stringify(profile));
      const session = await createSession();
      localStorage.setItem("session", JSON.stringify(session));
      setSession(session);
      setMessages([
        {
          query: "",
          answer: session?.answer || "",
          status: "neutral",
        },
      ]);

      if (profile && session) {
        // Navigate to the dashboard or profile page
        router.push("/welcome");
      } else {
        // If no profile is selected, redirect to the select profile page
        router.push("/");
      }
      setCreatingSession(false);
    },
    [router]
  );

  const updateProfileData = useCallback((profile: BusinessProfile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        error,
        selectedProfile,
        handleSelectProfile,
        updateProfileData,
        profiles: profiles || [],
        messages: messages || [],
        setMessages,
        session,
        logout,
        creatingSession: creatingSession,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
