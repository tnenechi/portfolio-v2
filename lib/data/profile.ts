import { ProfileInfo } from '@/lib/types';

export const profileData: ProfileInfo = {
  name: 'Thony Enechi',
  headline: 'Full-Stack Software Engineer',
  bio: 'Modern Web Experiences, Built to Scale',
  status: 'available',
  resumeUrl: '/resume.pdf',
  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/tnenechi',
      icon: 'VscGithub',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thony-enechi',
      icon: 'BsLinkedin',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:enechithony@gmail.com',
      icon: 'IoMailOutline',
    },
  ],
};
