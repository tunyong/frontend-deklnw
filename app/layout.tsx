import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DekLNW Deals | รวมของเด็ด Shopee และ TikTok",
  description:
    "รวมสินค้าแนะนำ โปรดี ของน่าใช้ สำหรับ Shopee Affiliate และ TikTok Shop กดดูราคาล่าสุดได้ทันที",
  keywords: [
    "Shopee Affiliate",
    "TikTok Shop",
    "ของเด็ด Shopee",
    "สินค้าแนะนำ",
    "โปรโมชัน",
    "ของใช้ในบ้าน",
    "สินค้าออนไลน์",
  ],
  authors: [{ name: "DekLNW" }],
  creator: "DekLNW",
  publisher: "DekLNW",
  metadataBase: new URL("https://deklnw.com"),
  openGraph: {
    title: "DekLNW Deals | รวมของเด็ด Shopee และ TikTok",
    description:
      "รวมสินค้าแนะนำ โปรดี ของน่าใช้ กดดูราคาล่าสุดได้ทันที",
    url: "https://deklnw.com",
    siteName: "DekLNW Deals",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DekLNW Deals | รวมของเด็ด Shopee และ TikTok",
    description:
      "รวมสินค้าแนะนำ โปรดี ของน่าใช้ กดดูราคาล่าสุดได้ทันที",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}