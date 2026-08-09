import type { MetadataRoute } from 'next';
import { profileData } from '@/lib/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profileData.name} — ${profileData.headline}`,
    short_name: profileData.name,
    description: profileData.bio,
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f1a',
    theme_color: '#0b0f1a',
    icons: [
      {
        src: '/favicon.png',
        sizes: '67x67',
        type: 'image/png',
      },
    ],
  };
}
