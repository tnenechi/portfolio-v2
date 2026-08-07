export type AvailabilityStatus = "available" | "busy" | "open_to_offers";

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "scholar";
  label: string;
  url: string;
  icon: string;
}

export interface ProfileInfo {
  name: string;
  headline: string;
  bio: string;
  location: string;
  status: AvailabilityStatus;
  socials: SocialLink[];
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** Optional cover image path. When omitted, UI falls back to a generated gradient placeholder. */
  coverImage?: string;
  tags: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}



export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof ContactInput, string>>;
  timestamp?: string;
}
