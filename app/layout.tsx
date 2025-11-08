import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nodi Verse - Lead Research Agent",
  description: "AI-powered lead research for premium creative collaboration opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
