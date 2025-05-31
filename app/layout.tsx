import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "@/components/NavBar";
import ProfileContextProvider from "./_context/ProfileContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSME Chatbot",
  description: "A chatbot for MSME support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ProfileContextProvider>
            <NavBar />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ProfileContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
