import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "White Rose Capital",
  description: "White Rose Capital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
