import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/config";
import { Announcement } from "@/components/Announcement";
import favicon from "../assets/icon64x64.ico";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import imageSrc from "../assets/tree-2987962_1280.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.NAME,
};

const showAnnouncement = false;

interface RootLayoutProps extends React.PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />

        <meta content="index,follow" name="robots" />
        <link href={config.SITE_URL} rel="canonical" />
        <meta content={`${config.NAME}: ${config.TITLE}`} property="og:title" />
        <meta content={config.SITE_URL} property="og:url" />
        <meta content="website" property="og:type" />
        <meta content={imageSrc.src} property="og:image" />
        <meta content="en" property="og:locale" />
        <meta content={config.NAME} property="og:site_name" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@onwidget" name="twitter:site" />
        <link rel="icon" type="image/x-icon" href={favicon.src}></link>

        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        {showAnnouncement && <Announcement />}
        {children}
      </body>
    </html>
  );
}
