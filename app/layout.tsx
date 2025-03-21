import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "Bliss Collection Official",
  description:
    "Bliss Collection Official – ekskluzivni muški kupaći kostimi vrhunskog dizajna. Kombinacija stila, komfora i luksuza. Poručite odmah",
  icons: {
    icon: "/logo bliss.svg",
    apple: "/logo bliss.svg",
  },
  keywords: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  alternates: {
    canonical: "https://www.blisscollectionofficial.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
