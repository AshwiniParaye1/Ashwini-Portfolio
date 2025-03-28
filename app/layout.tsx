import type { Metadata } from "next";
// import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwini Paraye",
  description: "Portfolio showcasing my work as a fullstack developer"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={jetbrainsMono.className}>{children}</body> */}
      <body className="bg-black">{children}</body>
    </html>
  );
}
