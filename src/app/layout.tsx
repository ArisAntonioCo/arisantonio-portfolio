import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aris Antonio - UI/UX Designer & Frontend Developer",
  description: "Portfolio of Aris Antonio, bringing ideas to life through code and intuitive design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased gap-0 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
