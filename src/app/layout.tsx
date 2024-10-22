import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { MainHeader, MainFooter } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "otelfiyat.com",
  description: "En Çok Otel En Uygun Fiyat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="bg-brand-neutral-50">
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
