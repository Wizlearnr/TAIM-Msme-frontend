"use client";
import { useProfileContext } from "@/app/_context/ProfileContext";
import { calculatePriority } from "@/app/utils";
import { useNotifications } from "@/services/notification";
import { Calendar, Clock } from "lucide-react";

const UpcomingDeadlines = () => {
  const { selectedProfile } = useProfileContext();

  const { isLoading, error, data: notifications = [] } = useNotifications(5);

  // add loader if notifications are loading
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-pulse">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white animate-pulse">
            <Calendar size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  // render no notifications message if no notifications
  if (!notifications.length) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white">
            <Calendar size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            No Upcoming Deadlines
          </h2>
        </div>
        <p className="text-gray-600">You have no upcoming deadlines.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white">
          <Calendar size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Deadlines</h2>
      </div>

      <p className="text-gray-600 mb-6">Important dates to remember</p>

      <div className="space-y-4 max-h-[250px] overflow-y-auto">
        {notifications.map((notification, index) => {
          const priority = calculatePriority(notification.days_remaining);
          const isHighPriority = priority === "high";
          return (
            <div
              key={index}
              className="p-4 rounded-xl border-l-4 bg-gradient-to-r from-gray-50 to-white transition-all duration-300 hover:shadow-md"
              style={{
                borderLeftColor: isHighPriority ? "#ef4444" : "#f59e0b",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {notification.scheme_name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>
                      Deadline:{" "}
                      {new Date(notification.deadline).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isHighPriority
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {notification.days_remaining} days left
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
