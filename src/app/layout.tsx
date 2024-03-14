import * as C from "@/components/index";
import type { Metadata } from "next"; 
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
      <body>
        <C.Header />
        {children}
        <C.Footer />
      </body>
    </html>
  );
}
