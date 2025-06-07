import { useQuery } from "@tanstack/react-query";
import { Notification } from "@/models/notification";
import { notifications } from "@/constants/notification";

const fetchNotifications = async (
  numberOfDaysAhead: number
): Promise<Notification[]> => {
  // const { data } = await apiClient.get<NotificationResponse>(`/notifications`, {
  //   params: {
  //     days_ahead: numberOfDaysAhead,
  //   },
  // });

  // return data.notifications;

  return notifications;
};

export const useNotifications = (numberOfDaysAhead: number) => {
  const query = useQuery({
    queryKey: ["watchLists", numberOfDaysAhead],
    queryFn: () => fetchNotifications(numberOfDaysAhead),
  });

  return query;
};
