import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NeedYou - AI Job Assistant Platform",
  description:
    "منصة ذكية تساعدك على إنشاء سيرة ذاتية احترافية مخصصة لكل وظيفة وتحليل فرصك في القبول باستخدام الذكاء الاصطناعي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
