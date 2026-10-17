import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
import { AboutSection } from '@/components/about/about-section';
import { ProjectGrid } from '@/components/projects/project-grid';
import { ContactSection } from '@/components/contact/contact-section';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ProjectGrid />
        <AboutSection />
      </main>
      <ContactSection />
    </>
  );
}