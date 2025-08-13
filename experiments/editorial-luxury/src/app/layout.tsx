import type { Metadata } from "next";
import { Spectral, Inter } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kah Chan - Product Designer",
  description: "Product designer specializing in AI and B2B enterprise SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} ${inter.variable} font-sans antialiased`}
        data-theme="light"
      >
        {children}
      </body>
    </html>
  );
}
