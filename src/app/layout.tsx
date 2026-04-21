import type { Metadata, Viewport } from "next";

import { Outfit, Amiri } from "next/font/google";
import FundraisingMarquee from "@/components/FundraisingMarquee";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-outfit",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const viewport: Viewport = {
  themeColor: "#008080",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Luganda Quran: Full Audio by Sheikh Ismail Sulaiman Nkata & Translation by Sheikh Abdurazak Matovu",
  description: "Listen to the Luganda Quran online. Featuring full Luganda Quran translation by Sheikh Ismail Sulaiman Nkata and the authentic Luganda Quran translation by Sheikh Abdurazak Matovu.",
  keywords: [
    "download luganda quran translation audio",
    "luganda quran audio download",
    "luganda audio quran sheikh ismail sulaiman nkata",
    "luganda quran translation sheikh abdulrazak matovu",
    "nkata quran audio",
    "matovu luganda translation",
    "luganda quran app",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Luganda Quran",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-8237514940582521",
  },
  verification: {
    google: "pEAChCoY3NqXiohCgZP7r1Y7sPE1wDrIbOIba3gNT4A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8237514940582521"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${outfit.variable} ${amiri.variable}`}>
        {children}
        <FundraisingMarquee />
      </body>
    </html>
  );
}
