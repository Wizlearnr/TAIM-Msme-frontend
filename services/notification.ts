import { BusinessProfile } from "@/models/business-profile";
import { useQuery } from "@tanstack/react-query";
import { BASEURL } from ".";
import { Notification, NotificationResponse } from "@/models/notification";

const fetchNotifications = async (
    businessId: number,
    token: string,
    numberOfDaysAhead: number = 5
): Promise<Notification[]> => {

  const url = `${BASEURL}notifications?business_id=${businessId}&days_ahead=${numberOfDaysAhead}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Notifications");
  }
  const data = await response.json();

  return data.notifications as Notification[];
};

export const useNotifications = (
    businessId: number,
    token: string,
    numberOfDaysAhead: number
) => {
  const query = useQuery({
    queryKey: ["watchLists"],
    queryFn: () => fetchNotifications(businessId, token, numberOfDaysAhead),
  });

  return query;
};

