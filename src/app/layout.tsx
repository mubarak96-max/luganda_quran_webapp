import type { Metadata } from "next";
import { Outfit, Amiri } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Luganda Quran: Full Audio by Sheikh Sulaiman Nkata & Translation by Sheikh Abdurazak Matovu",
  description: "Get the ultimate Luganda Quran app. Featuring full Luganda Quran translation by Sheikh Sulaiman Nkata and the authentic Luganda Quran translation by Sheikh Abdurazak Matovu.",
  keywords: ["luganda audio quran sheikh sulaiman nkata", "luganda quran translation sheikh abdulrazak matovu", "nkata quran audio", "matovu luganda translation", "luganda quran app"],
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "h4KL3vd6GWtZIROnPyLtY2tIYtEu7LKfR4NY5_Zqbvc",
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
      </head>
      <body className={`${outfit.variable} ${amiri.variable}`}>
        {children}
      </body>
    </html>
  );
}
