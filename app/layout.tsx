import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import SessionWrapper from "./api/auth/Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exploro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div>
            <Navbar />
          </div>
          <div >
            {children}
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
