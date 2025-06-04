export const calculatePriority = (daysRemaining: number): string => {
    if (daysRemaining <= 2) {
        return "high"; // High priority for urgent deadlines
    } else if (daysRemaining <= 7) {
        return "medium"; // Medium priority for approaching deadlines
    } else {
        return "low"; // Low priority for distant deadlines
    }
}