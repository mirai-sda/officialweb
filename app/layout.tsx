import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirai - Software & AI Solutions",
  description: "Software & AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col flex-1 min-h-screen mx-auto`}
      >
        <Header />
        <main className="flex flex-1 flex-col max-w-screen-2xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
