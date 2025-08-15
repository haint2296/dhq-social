import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NextThemesProviders } from "@/shared/providers/themes";

/**
 * @description Styles
 */
import "@/shared/styles/globals.css";

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Devhayquao Nguyen Thanh Hai",
  description: "Devhayquao Nguyen Thanh Hai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
    >
      <NextThemesProviders>{children}</NextThemesProviders>
    </body>
  </html>
  );
}
