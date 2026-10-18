import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { profileData } from "@/lib/data/profile";
import { SITE_URL } from "@/lib/config";

const fontBody = localFont({
  src: [
    { path: "../public/Supreme-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-supreme",
  display: "swap",
});

const fontHeading = localFont({
  src: [
    { path: "../public/Recia-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/Recia-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-recia",
  display: "swap",
});

const TITLE = `${profileData.name} – Software Engineer`;
const DESCRIPTION = `Portfolio of ${profileData.name}, a ${profileData.headline}. ${profileData.bio}`;

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
    description: `Explore the portfolio of ${profileData.name}`,
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
  themeColor: "oklch(1 0 0)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        fontBody.variable,
        fontHeading.variable,
        "type-body",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-space-sm focus:py-space-2xs focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
