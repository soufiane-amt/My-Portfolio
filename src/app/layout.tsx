import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: "Soufiane Amajat | Software Developer",
  description: "Full-stack developer passionate about creating exceptional digital experiences. Explore my portfolio showcasing projects in web development, systems programming, and more.",
  keywords: ["software developer", "full stack", "portfolio", "web development", "React", "Next.js"],
  authors: [{ name: "Soufiane Amajat" }],
  openGraph: {
    title: "Soufiane Amajat | Software Developer",
    description: "Full-stack developer passionate about creating exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
