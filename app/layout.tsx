import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { profileData } from "@/lib/data/profile";
import { SITE_URL } from "@/lib/config";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const TITLE = `${profileData.name} | Building Modern Web Experiences`;
const DESCRIPTION = `Portfolio of ${profileData.name}, a ${profileData.headline} specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Explore modern web applications, technical case studies, and software engineering projects.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    profileData.name,
    profileData.name.split(" ")[0],
    profileData.headline,
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
  authors: [{ name: profileData.name, url: SITE_URL }],
  creator: profileData.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: TITLE,
    description: `Explore the portfolio of ${profileData.name}, featuring full-stack web applications, interactive user experiences, technical case studies, and software engineering projects.`,
    type: "website",
    url: SITE_URL,
    siteName: profileData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0.002 240)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.11 0.015 255)" },
  ],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Skip to main content
        </a>
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
