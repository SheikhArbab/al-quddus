import * as C from "@/components/index";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Online Women's Clothing Store for Fashionable Women, Kids & Home - Shop Online | Al Quddus",
  description: "Online shopping the latest Pakistani fashion clothing for women, including unstitched and ready-to-wear dresses, kids clothing, men's fashion, and home textiles from Pakistan's best fashion brand - Al Quddus Ideas. Upgrade your wardrobe with trendy women's clothes. Enjoy PKR 99 delivery, easy returns & 24x7 live chat support. Buy women's clothing online now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/android-chrome-192x192.png" type="image/x-icon" />
        {/* Standard Favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
        {/* Android Chrome Icons */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
      </Head>
      <body>
        <C.Header />
        {children}
        <C.Footer />
      </body>
    </html>
  );
}
