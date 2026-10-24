import React from "react";

const allAnnouncements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
];

const bgColors = ["bg-[#F0F9FF]", "bg-[#F3E8FF]", "bg-[#FEFCE8]"];

export default function AnnouncementsPage() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">All Announcements</h1>
        <span className="text-sm text-gray-400">
          Total: {allAnnouncements.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {allAnnouncements.map((item, index) => (
          <div
            key={item.id}
            className={`p-5 rounded-xl ${
              bgColors[index % bgColors.length]
            } transition-all duration-200 hover:shadow-sm`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800 text-base">
                {item.title}
              </h2>
              <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-md font-medium shadow-xs">
                {item.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}