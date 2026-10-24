"use client"
import Image from 'next/image'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
    { label: 'Mon', present: 85, absent: 15 },
    { label: 'Tue', present: 92, absent: 8 },
    { label: 'Wed', present: 78, absent: 22 },
    { label: 'Thu', present: 95, absent: 5 },
    { label: 'Fri', present: 88, absent: 12 },
]

export default function AttendeceChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 h-[420px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-base font-bold text-slate-800">Attendance</h2>
          
        </div>
        <button className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
          <Image src="/moreDark.png" alt="" width={18} height={18} />
        </button>
      </div>
      
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="present" fill="#facc15" radius={[6, 6, 0, 0]} barSize={20} />
            <Bar dataKey="absent" fill="#e2e8f0" radius={[6, 6, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-5 text-xs justify-center mt-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-slate-500">Present</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="w-2 h-2 rounded-full bg-slate-200"></span>
              <span className="text-slate-500">Absent</span>
            </div>
          </div>
    </div>
  )
}
