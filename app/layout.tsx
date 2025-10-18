import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200","300","400", "500", "600", "700", "800", "900"],
});

const euclid = localFont({
  src: '../public/fonts/euclid-circular-a.ttf',
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "CodeXtreme | Build Things People Need",
  description: "We discover and nurture early tech talent and founders, helping them build and ship real products. Through Power of Code, we develop high-impact tech solutions for people and communities across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${euclid.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
