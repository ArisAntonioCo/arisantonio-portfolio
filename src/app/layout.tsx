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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased gap-0">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
