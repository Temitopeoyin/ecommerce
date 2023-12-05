import Header from "@/components/Header";
import "../globals.css";
import React from 'react'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
<div className=" min-h-screen flex flex-col justify-between bg-red-20 max-w-[90rem] mx-auto bg-[#D9D9D97D]">
<Header />
    {children}
</div>
    );
  }