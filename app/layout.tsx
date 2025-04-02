//app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwini Paraye",
  description: "Fullstack Developer"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)"
        }}
      >
        {children}
      </body>
    </html>
  );
}
