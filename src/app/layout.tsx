import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Fariz Izuddin | Computer Science Portfolio",
  description: "Portfolio for Muhammad Fariz Izuddin Bin Azhar, a Computer Science student focused on web systems, data, and IT support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-gradient-pastel relative">
        {children}
      </body>
    </html>
  );
}
