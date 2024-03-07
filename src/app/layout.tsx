import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import IntroSection from "@/components/shared/bg-animation/IntroSection";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "DegenDevs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <IntroSection />
        <div className="px-10 py-5">{children}</div>
      </body>
    </html>
  );
}
