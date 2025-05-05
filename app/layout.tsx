import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AGAPAO",
  description: "아가파오교회 웹사이트에 오신것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        />
      </head>
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-JBJYL5H0RR" />
    </html>
  );
}
