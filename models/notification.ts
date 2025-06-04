
export type Notification = {
    scheme_id: number;
    scheme_name: string;
    deadline: string;
    days_remaining: number;
    description: string;
}

export type NotificationResponse = {
    notifications: Notification[];
    total_notifications: number;
};