"use client";

import React, { useState } from 'react';

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis reiciendis aliquam minus...",
  },
];

const bgColors = [
  "bg-[#F0F9FF]",
  "bg-[#F3E8FF]",
  "bg-[#FEFCE8]",
];

export const Announcements = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedAnnouncements = showAll ? announcements : announcements.slice(0, 2);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800">Announcements</h1>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer border-none bg-transparent"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <div className={`flex flex-col gap-3 transition-all duration-300 ${showAll ? "max-h-[280px] overflow-y-auto pr-1" : ""}`}>
        {displayedAnnouncements.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl ${bgColors[index % bgColors.length]} transition-opacity hover:opacity-90 shrink-0`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-700 text-sm">{item.title}</h2>
              <span className="text-[10px] text-gray-400 bg-white px-2 py-1 rounded-md font-medium">
                {item.date}
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};