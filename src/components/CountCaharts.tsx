"use client"
import Image from "next/image"
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { name: 'أقل من 18', uv: 4.2, pv: 2100, fill: "#a5b4fc" },
    { name: '18-29', uv: 8.9, pv: 3986, fill: "#818cf8" },
    { name: '30-39', uv: 6.5, pv: 3200, fill: "#6366f1" },
    { name: '40-49', uv: 3.8, pv: 1800, fill: "#726bed" },
    { name: '50 فأكثر', uv: 2.1, pv: 950, fill: "#3d31be" },
]

export default function CountCaharts() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-[420px] flex flex-col w-full" dir="rtl">
            <div className="flex justify-between items-center mb-2">
                <div className="flex justify-between w-full">
                <button className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
                    <Image src="/moreDark.png" alt="" width={18} height={18} />
                </button>
                    <h2 className="text-base font-bold text-slate-800">Students</h2>
                </div>
            </div>
            <div className="flex-1 min-h-0 border-none">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="45%"
                        innerRadius="35%"
                        outerRadius="90%"
                        barSize={12}
                        data={data}
                    >
                        <RadialBar
                            dataKey="uv"
                            cornerRadius={6}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                fontSize: '13px',
                                direction: 'rtl',
                                textAlign: 'right'
                            }}
                           
                        />
                        <Legend
                            iconType="circle"
                            iconSize={8}
                            verticalAlign="bottom"
                            align="center"
                            formatter={(value: string) => (
                                <span style={{ color: '#64748b', fontSize: '12px', fontWeight: 500 }}>
                                    {value}
                                </span>
                            )}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 pt-2 border-t border-slate-50">
                <div className="text-center">
                    <p className="text-lg font-bold text-slate-800">15.5%</p>
                    <p className="text-[11px] text-slate-400">Total precent of students</p>
                </div>
                <div className="w-px bg-slate-100"></div>
                <div className="text-center">
                    <p className="text-lg font-bold text-indigo-600">11,036</p>
                    <p className="text-[11px] text-slate-400">count students </p>
                </div>
            </div>
        </div>
    )
}
