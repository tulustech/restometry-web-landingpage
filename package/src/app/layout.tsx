import type { Metadata } from "next";
import { Lobster, Poppins } from "next/font/google";
import Script from "next/script";
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
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim();
  const serializedGoogleTagId = JSON.stringify(googleTagId ?? "").replace(
    /[<\u2028\u2029]/g,
    (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lobster.variable}`}>
        {children}
        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${serializedGoogleTagId});`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
