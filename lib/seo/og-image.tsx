import { ImageResponse } from 'next/og';
import { profileData } from '@/lib/data/profile';

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = 'image/png';
export const ogImageAlt = `${profileData.name} — ${profileData.headline}`;

export function generateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b0f1a 0%, #161225 55%, #1e1533 100%)',
          color: '#f5f5fa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {profileData.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            marginTop: 20,
            backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #e879f9 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {profileData.headline}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
