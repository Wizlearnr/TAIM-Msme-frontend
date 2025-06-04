"use client";

import { User, Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useProfileContext } from "@/app/_context/ProfileContext";
import { useRouter } from "next/navigation";
import Notifications from "./Notification";
const NavBar = () => {
  const { selectedProfile, logout } = useProfileContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationsIndicator, setShowNotificationsIndicator] =
    useState(false);

  const notificationDropdownRef = React.useRef<HTMLDivElement>(null);
  const profileDropdownRef = React.useRef<HTMLDivElement>(null);

  const notificationButtonRef = React.useRef<HTMLButtonElement>(null);
  const profileButtonRef = React.useRef<HTMLButtonElement>(null);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(
      () => setShowNotifications(!!selectedProfile),
      2000
    );
    return () => clearTimeout(timer);
  }, [selectedProfile]);

  const handleNotificationClick = () => {
    setShowProfileDropdown(false);
    setShowNotifications(!showNotifications);
  };

  const handleProfileClick = () => {
    setShowNotifications(false);
    setShowProfileDropdown(!showProfileDropdown);
  };

  // close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(target) &&
        !notificationButtonRef.current?.contains(target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(target) &&
        !profileButtonRef.current?.contains(target)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [
    notificationDropdownRef,
    profileDropdownRef,
    setShowNotifications,
    setShowProfileDropdown,
  ]);

  return (
    <header className="relative bg-white border-b shadow-lg z-50 sticky top-0 z-50">
      <div className="p-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg relative overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="MSME Logo"
                fill
                className="object-contain scale-[1.9]"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MSME Scheme Sahayak
              </h1>
              <p className="text-sm text-gray-600 ml-3 -mt-1">
                {"     "}మీ ప్రభుత్వ పథక మార్గదర్శక నేస్తం
              </p>
            </div>
          </div>

          <div className="relative">
            {selectedProfile && (
              <div className="flex gap-[15px]">
                <button
                  onClick={handleNotificationClick}
                  ref={notificationButtonRef}
                  className="relative p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {showNotificationsIndicator && (
                    <>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    </>
                  )}
                </button>

                <button
                  onClick={handleProfileClick}
                  ref={profileButtonRef}
                  className="relative p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <User className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}

            {showNotifications && (
              <Notifications
                notificationDropdownRef={notificationDropdownRef}
                setShowNotifications={setShowNotifications}
                setShowNotificationsIndicator={setShowNotificationsIndicator}
              />
            )}

            {showProfileDropdown && (
              <div
                ref={profileDropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-500"
              >
                <div className="p-4 space-y-2">
                  <button
                    className="w-full text-left text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      router.push("/profile");
                    }}
                  >
                    View Profile
                  </button>
                  <button
                    className="w-full text-left text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      logout();
                    }}
                  >
                    Switch Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
