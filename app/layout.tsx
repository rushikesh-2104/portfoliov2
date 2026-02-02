import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio20-rho.vercel.app/"), // <-- apna domain
  title: {
    default: "Code By Rushikesh",
    template: "%s | Code By Rushikesh",
  },
  description:
    "Rushikesh Mhatre - Portfolio website. Web developer, frontend developer, and full-stack projects.",
  keywords: [
    "Rushikesh Mhatre",
    "Portfolio",
    "Web Developer",
    "Panvel",
    "Next.js",
    "Frontend Developer",
    "Angular",
    "Nextjs",
  ],
  authors: [{ name: "Rushikesh Mhatre", url: "https://portfolio20-rho.vercel.app/" }],
  creator: "Rushikesh Mhatre",
  publisher: "Rushikesh Mhatre",

  openGraph: {
    title: "Rushikesh Portfolio",
    description:
      "Portfolio of Rushikesh Mhatre - Frontend developer & UI designer.",
    url: "https://portfolio20-rho.vercel.app/",
    siteName: "Portfolio",
    images: [
      {
        url: "/rushi.jpeg", 
        width: 1200,
        height: 630,
        alt: "Rushikesh Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Code By Rushikesh",
    description:
      "Portfolio of Rushikesh Mhatre - Frontend developer & UI designer.",
    images: ["/rushi.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://portfolio20-rho.vercel.app/",
  },

  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
