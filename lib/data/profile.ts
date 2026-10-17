import { ProfileInfo } from '@/lib/types';

export const profileData: ProfileInfo = {
  name: 'Thony Enechi',
  headline: 'Software Engineer',
  bio: 'I build practical, reliable web applications — from the interfaces people use to the systems that power them.',
  status: 'available',
  resumeUrl: '/resume.pdf',
  socials: [
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:enechithony@gmail.com',
      icon: 'IoMailOutline',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thony-enechi',
      icon: 'BsLinkedin',
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/tnenechi',
      icon: 'VscGithub',
    },
  ],
};

export const aboutData = {
  title: 'A little about me',
  paragraphs: [
    {
      isLead: true,
      text: 'Hi! I’m Thony, a software engineer with a background in Computer Science and experience building full-stack web applications.',
    },
    {
      text: 'I work across the stack, from creating intuitive, interactive frontends to developing reliable backend systems and APIs.',
    },
    {
      text: 'I enjoy turning ideas into functional, well-crafted applications, with a focus on clean, maintainable code and experiences that are genuinely enjoyable to use.',
    },
    {
      isRule: true,
      text: 'I’m interested in how applications work beyond the surface, from how their components fit together to how they’re structured and maintained.',
    },
  ],
};

export const technologiesData = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
];
