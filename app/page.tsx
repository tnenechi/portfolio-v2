import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { ProjectGrid } from '@/components/projects/project-grid';
import { ContactForm } from '@/components/contact/contact-form';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />

        {/* Phase 3 – Projects section (US1) */}
        <ProjectGrid />

        {/* Phase 4 – Contact (US3) */}
        <section id="contact" aria-label="Contact" className="py-24 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
                Get in touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Contact</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Have a role, project, or question in mind? Send a message and I&apos;ll get back
                to you shortly.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}