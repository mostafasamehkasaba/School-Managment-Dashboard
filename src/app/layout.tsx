import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react"; // 1. استيراد Suspense

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. تغليف الـ children داخل Suspense */}
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}