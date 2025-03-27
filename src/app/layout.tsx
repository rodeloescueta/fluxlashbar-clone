import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flux Lash Bar | Premier Eyelash & Brow Services in Vancouver",
  description:
    "Flux Lash Bar offers luxury eyelash extensions, lifts, and brow services in Vancouver. Book your appointment for stunning, personalized results.",
  keywords:
    "eyelash extensions, lash lift, brow lamination, Vancouver, Flux Lash Bar, beauty salon, semi-permanent makeup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
