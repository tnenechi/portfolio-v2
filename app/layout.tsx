import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Thony Enechi | Building Modern Web Experiences",
  description:
    "Portfolio of Thony Enechi, a Full-Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Explore modern web applications, technical case studies, and software engineering projects.",
  keywords: [
    "Thony Enechi",
    "Thony",
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
    "GSAP",
    "Web Development",
    "Software Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Thony Enechi" }],
  openGraph: {
    title: "Thony Enechi | Building Modern Web Experiences",
    description:
      "Explore the portfolio of Thony Enechi, featuring full-stack web applications, interactive user experiences, technical case studies, and software engineering projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
