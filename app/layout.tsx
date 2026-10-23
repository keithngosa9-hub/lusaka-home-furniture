import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lusaka Home Furniture",
  description: "Quality furniture in Lusaka, Zambia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}