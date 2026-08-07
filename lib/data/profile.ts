import { ProfileInfo } from '@/lib/types';

export const profileData: ProfileInfo = {
  name: 'Thony Enechi',
  headline: 'Full-Stack Software Engineer',
  bio: 'Specializing in high-performance web applications, modern interactive design systems, and distributed frontend architectures. Passionate about crafting 60fps micro-animations, accessible user interfaces, and robust cloud integrations with React, Next.js, TypeScript, Node.js, and PostgreSQL.',
  location: 'Remote',
  status: 'available',
  resumeUrl: '/resume.pdf',
  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com',
      icon: 'Code2',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'Globe',
    },
    {
      platform: 'twitter',
      label: 'Twitter / X',
      url: 'https://twitter.com',
      icon: 'X',
    },
    {
      platform: 'scholar',
      label: 'Google Scholar',
      url: 'https://scholar.google.com',
      icon: 'GraduationCap',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:thony.enechi@example.com',
      icon: 'Mail',
    },
  ],
};
