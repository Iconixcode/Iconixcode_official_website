import Container from "@/components/common/Container";
import BackgroundGlow from "@/components/landing/BackgroundGlow";
import SocialLinks from "@/components/landing/SocialLinks";
import { company } from "@/config/company";

export default function ComingSoonHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-white">
      <BackgroundGlow />

      <Container className="relative z-10 flex min-h-screen items-center justify-center py-12 sm:py-16">
        <section className="flex w-full flex-col items-center text-center">
          <div className="mb-14 rounded-full border border-white/15 px-6 py-3 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:mb-16 sm:px-10 md:px-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/45 sm:text-xs md:text-sm md:tracking-[0.4em]">
              {company.badgeText}
            </p>
          </div>

          <h1 className="max-w-5xl text-[3.25rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem]">
            {company.headline}
          </h1>

          <p className="mt-7 max-w-4xl text-sm font-medium uppercase tracking-[0.32em] text-white/40 sm:text-base md:text-xl md:tracking-[0.42em]">
            {company.subHeadline}
          </p>

          <div className="mt-20 sm:mt-24">
            <SocialLinks />
          </div>

          <footer className="mt-24 flex flex-col items-center gap-5 text-center sm:mt-28">
            <p className="text-base font-medium text-white/28 sm:text-lg md:text-xl">
              {company.whatsappLabel}: {company.whatsappNumber}
            </p>

            <p className="text-sm font-medium text-white/24 sm:text-base md:text-lg">
              © {company.copyrightYear} {company.legalName}. All Rights Reserved.
            </p>
          </footer>
        </section>
      </Container>
    </main>
  );
}