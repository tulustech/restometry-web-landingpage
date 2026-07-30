import type { Metadata } from "next";
import { Lobster, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Restometry | Restaurant labor costs, under control",
  description: "Plan restaurant staffing with expected sales and scheduled labor in one clear view. Join Restometry early access for independent restaurants.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lobster.variable}`}>{children}</body>
    </html>
  );
}
