import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { DoctorsProvider } from "@/context/DoctorsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optical Insight Client",
  description: "Optical Insight Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DoctorsProvider>{children}</DoctorsProvider>
        </AuthProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
