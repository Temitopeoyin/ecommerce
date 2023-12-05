import Header from "@/components/Header";
import "../globals.css";
import React from 'react'
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatherland Global",
  description: "fatherland global community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} min-h-screen flex flex-col justifybetween bg-red-20 max-w-[90rem] mx-auto bg-[#D9D9D97D]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
