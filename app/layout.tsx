import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gharbheti — Find your next flat, hassle-free",
  description:
    "Gharbheti helps you discover verified flats for rent, talk directly to owners, and move in faster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
