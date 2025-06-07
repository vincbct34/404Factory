import { ADLaM_Display } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const eduHand = ADLaM_Display({
  variable: "--font-edu-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "404Factory",
  description: "A website of my freelancing activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eduHand.variable} font-edu antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
