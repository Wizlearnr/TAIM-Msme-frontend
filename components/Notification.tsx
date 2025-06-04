"use client";

import { useProfileContext } from "@/app/_context/ProfileContext";
import { BusinessProfile } from "@/models/business-profile";
import { useNotifications } from "@/services/notification";
import { X, Calendar } from "lucide-react";
import React, { useEffect } from "react";

type WatchListProps = {
    notificationDropdownRef: React.RefObject<HTMLDivElement | null>;
    setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
    setShowNotificationsIndicator: React.Dispatch<React.SetStateAction<boolean>>;
    };

const Notifications = (
    props: WatchListProps
) => {
  const { notificationDropdownRef, setShowNotifications, setShowNotificationsIndicator} = props;
  const { selectedProfile } = useProfileContext();
  const businessId = selectedProfile?.business_id || 0;
  const token = selectedProfile?.token ?? "";
  const {
    isLoading,
    error,
    data: notifications = [],
  } = useNotifications(businessId, token, 5); // fetch notifications for the next 5 days

  useEffect(() => {
    setShowNotificationsIndicator(notifications.length > 0);
  }, [notifications, setShowNotificationsIndicator]);

  // Don't render component if no notifications
  if (!notifications.length || error || isLoading) {
    return null;
  }

  return (
    <div
      ref={notificationDropdownRef}
      className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-in slide-in-from-top-2"
    >
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">Upcoming Deadlines</h3>
        <button
          onClick={() => setShowNotifications(false)}
          className="p-1 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition"
          aria-label="Close Notifications"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {notifications.map((item) => (
          <div
            key={item.scheme_id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <Calendar className="w-5 h-5 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">{item.scheme_name}</p>
              <p className="text-sm text-gray-600">
                Deadline: {new Date(item.deadline).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;