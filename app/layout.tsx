import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Warden — AI Cost Visibility & Governance",
  description:
    "Warden sits between your applications and LLM providers to intercept, attribute, and govern AI API spend. Cost visibility for FinOps teams.",
  openGraph: {
    title: "Warden — AI Cost Visibility & Governance",
    description:
      "Intercept, attribute, and govern AI API spend across OpenAI, Anthropic, and Gemini.",
    url: "https://wardenai.dev",
    siteName: "Warden",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
