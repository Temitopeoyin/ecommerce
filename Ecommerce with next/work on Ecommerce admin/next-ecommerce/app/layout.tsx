// import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Modalprovider } from "@/providers/Modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";
import prismadb from "@/lib/prismadb";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "E-Commerce Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToasterProvider />
            <Modalprovider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
