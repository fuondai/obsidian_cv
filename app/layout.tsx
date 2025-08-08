import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { DefaultSeo } from "next-seo";

export const metadata: Metadata = {
  title: "Bui Phuong Dai • Portfolio",
  description: "Smart Contract Auditor • Blockchain Security • Research",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-zinc-200 obsidian-grid">
        <DefaultSeo
          openGraph={{ title: "Bui Phuong Dai", description: "Portfolio" }}
          themeColor="#0B0F17"
        />
        {children}
      </body>
    </html>
  );
}
