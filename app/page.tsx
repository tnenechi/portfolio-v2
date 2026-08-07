import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { ProjectGrid } from '@/components/projects/project-grid';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Phase 3 – Projects section (US1) */}
        <ProjectGrid />

        {/* Phase 5 – Contact (US3 – to be implemented) */}
        <section id="contact" aria-label="Contact" className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground text-sm">Contact section coming soon…</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}