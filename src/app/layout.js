import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fortine | Premium Furniture & Toys",
  description: "Shop the best furniture and toys for your home.",
};

import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <Suspense fallback={<div style={{ height: '60px', background: 'var(--surface)' }}></div>}>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
