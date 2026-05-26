import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Binh Phuong Tram — Software Engineer & Business Analyst",
  description:
    "Portfolio of Nguyen Binh Phuong Tram — Software Engineering graduate from FPT University. Experienced in full-stack development, QA, and business analysis.",
  openGraph: {
    title: "Nguyen Binh Phuong Tram",
    description: "Software Engineer & Business Analyst | Ho Chi Minh City",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#FAFAF7] text-[#0F0F0E] antialiased">{children}</body>
    </html>
  );
}
