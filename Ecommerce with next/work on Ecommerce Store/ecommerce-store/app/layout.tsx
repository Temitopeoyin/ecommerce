import { Inter } from "next/font/google";

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
