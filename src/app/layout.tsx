import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700'],
  variable: "--font-oswald"
});

export const metadata: Metadata = {
  title: "GPT IMCYC | COMPARTIR EL CONOCIMIENTO",
  description: "Inteligencia artificial aplicada al concreto y al cemento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
