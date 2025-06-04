import { useQuery } from "@tanstack/react-query";
import { Notification, NotificationResponse } from "@/models/notification";
import { apiClient } from ".";

const fetchNotifications = async (
  numberOfDaysAhead: number = 5
): Promise<Notification[]> => {
  const { data } = await apiClient.get<NotificationResponse>(`/notifications`, {
    params: {
      days_ahead: numberOfDaysAhead,
    },
  });

  return data.notifications;
};

export const useNotifications = (numberOfDaysAhead: number) => {
  const query = useQuery({
    queryKey: ["watchLists", numberOfDaysAhead],
    queryFn: () => fetchNotifications(numberOfDaysAhead),
  });

  return query;
};
