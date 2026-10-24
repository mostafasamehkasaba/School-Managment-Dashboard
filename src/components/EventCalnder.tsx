"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const borderColors = [
  "border-t-[#C3EBFA]",
  "border-t-[#CFCEFF]",
  "border-t-[#FAE27C]",
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="custom-calendar-wrapper flex justify-center">
        <Calendar 
          onChange={onChange} 
          value={value} 
          locale="en-US"
          className="w-full border-none font-sans text-sm"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-lg font-semibold text-gray-800">Events</h1>
        <Image 
          src="/moreDark.png" 
          alt="more" 
          width={20} 
          height={20} 
          className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
        />
      </div>

      <div className="flex flex-col gap-3">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`p-4 rounded-md border border-gray-100 border-t-4 ${borderColors[index % borderColors.length]} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold text-gray-700 text-sm">{event.title}</h2>
              <span className="text-xs text-gray-400 font-medium">{event.time}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}