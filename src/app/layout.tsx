import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Aris Antonio - UI/UX Designer & Frontend Developer",
  description: "Portfolio of Aris Antonio, bringing ideas to life through code and intuitive design",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Design",
    "User Experience",
    "User Interface",
    "Philippines"
  ],
  authors: [{ name: "Aris Antonio" }],
  creator: "Aris Antonio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arisantonio.com",
    title: "Aris Antonio - UI/UX Designer & Frontend Developer",
    description: "Portfolio of Aris Antonio, bringing ideas to life through code and intuitive design",
    siteName: "Aris Antonio Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aris Antonio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aris Antonio - UI/UX Designer & Frontend Developer",
    description: "Portfolio of Aris Antonio, bringing ideas to life through code and intuitive design",
    images: ["/og-image.png"],
    creator: "@arisantonio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased gap-0`}>
        <ErrorBoundary>
          <main className="min-h-screen px-4 py-6 sm:px-8 sm:py-10 lg:px-16 lg:py-16 xl:px-24 xl:py-20">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
