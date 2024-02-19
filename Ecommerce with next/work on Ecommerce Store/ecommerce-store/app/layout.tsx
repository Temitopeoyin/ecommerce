import { Inter } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";

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
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
