import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samyak Talesra | Technical Product Manager",
  description: "Portfolio of Samyak Talesra, a Technical Product Manager specialized in building AI-powered SaaS and enterprise systems.",
  keywords: ["Product Manager", "Technical Product Manager", "AI Products", "SaaS", "FinTech", "Samyak Talesra"],
  authors: [{ name: "Samyak Talesra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
