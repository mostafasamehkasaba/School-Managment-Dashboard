import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components/Menu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} h-screen flex bg-[#f8f9fa] text-slate-900 overflow-hidden`}>
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white border-r border-slate-100 p-4 flex flex-col h-full">
        <Link 
          href="/" 
          className="flex items-center justify-center lg:justify-start gap-2.5 pb-5 border-b border-slate-100 shrink-0"
        >
          <div className="p-1.5 bg-slate-100 rounded-lg">
            <Image src="/logo.png" alt="SchoolLogo" width={22} height={22} className="opacity-80" />
          </div>
          <span className="hidden lg:block font-semibold text-base text-slate-800 tracking-tight">
            School<span className="text-slate-500">Lama</span>
          </span>
        </Link>

        <div className="flex-1 mt-2 overflow-y-auto">
          <Menu />
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar />
        
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}