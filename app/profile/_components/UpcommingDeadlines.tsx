"use client";
import { Calendar, Clock } from "lucide-react";

const UpcomingDeadlines = () => {
  const deadlines = [
    {
      title: "PMEGP Scheme",
      date: "31 Dec 2025",
      daysLeft: 213,
      priority: "high",
    },
    {
      title: "CGTMSE Credit Guarantee",
      date: "25 Dec 2025",
      daysLeft: 207,
      priority: "medium",
    },
    {
      title: "CGTMSE Credit Guarantee",
      date: "25 Dec 2025",
      daysLeft: 207,
      priority: "medium",
    },
    {
      title: "CGTMSE Credit Guarantee",
      date: "25 Dec 2025",
      daysLeft: 207,
      priority: "medium",
    },
  ];

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
        {deadlines.map((deadline, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border-l-4 bg-gradient-to-r from-gray-50 to-white transition-all duration-300 hover:shadow-md "
            style={{
              borderLeftColor:
                deadline.priority === "high" ? "#ef4444" : "#f59e0b",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {deadline.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={14} />
                  <span>Deadline: {deadline.date}</span>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    deadline.priority === "high"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {deadline.daysLeft} days left
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
