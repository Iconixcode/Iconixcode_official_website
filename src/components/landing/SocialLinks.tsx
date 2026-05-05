import { socialLinks } from "@/config/socialLinks";

export default function SocialLinks() {
  return (
    <nav
      aria-label="Social media links"
      className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white sm:h-14 sm:w-14"
          >
            <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
          </a>
        );
      })}
    </nav>
  );
}