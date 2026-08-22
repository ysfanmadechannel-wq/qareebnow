import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";


/**
 * Shared Qareeb site chrome: logo, buttons, header nav, social links, footer.
 * Edit social URLs in SOCIAL_LINKS below — used by BOTH the "Follow us on
 * social media" block and the footer.
 */

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/qaree_bofficial/" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/18hR4uZ9hJ/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/qareebnow.com/" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@qareebofficial-l3l?si=ASzCqLZQrrRGTUep" },
] as const;

export const TIKTOK_URL = "https://www.tiktok.com/@qaree_bofficial?_r=1&_t=ZS-97uj5cvZDtM";

/** Official Qareeb logo (CDN asset). Pass a height class, e.g. "h-12". */
export const Logo = ({ className = "h-10" }: { className?: string }) => (
  <img
    src={qareebLogo.url}
    alt="Qareeb"
    className={`w-auto object-contain ${className}`}
    loading="eager"
    decoding="async"
  />
);

export const BrandButton = ({
  children, href = "#waitlist", variant = "solid", className = "",
}: { children: React.ReactNode; href?: string; variant?: "solid" | "outline"; className?: string }) => {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]";
  const styles =
    variant === "solid"
      ? "text-white hover:brightness-105"
      : "border-2 hover:bg-[#FFF3EC]";
  const inline: React.CSSProperties =
    variant === "solid"
      ? { backgroundColor: "#FF6B2C" }
      : { borderColor: "#FF6B2C", color: "#FF6B2C", backgroundColor: "#fff" };
  return (
    <a href={href} className={`${base} ${styles} ${className}`} style={inline}>
      {children}
    </a>
  );
};

export function Nav({ homeHref = "#top" }: { homeHref?: string }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        {homeHref === "#top" ? (
          <a href="#top" className="flex items-center gap-2">
            <Logo className="h-10 sm:h-12" />
          </a>
        ) : (
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-10 sm:h-12" />
          </Link>
        )}
        <BrandButton href={homeHref === "#top" ? "#waitlist" : "/#waitlist"} className="px-4 py-2 text-sm">
          Join Waitlist
        </BrandButton>
      </div>
    </header>
  );
}

type FooterLink = { label: string; to?: string; href?: string };

const footerCols: { title: string; links: FooterLink[] }[] = [
  { title: "Company", links: [{ label: "About Us" }, { label: "All Categories", to: "/categories" }, { label: "Blog (Coming Soon)" }] },
  { title: "Support", links: [{ label: "Help Center (Coming Soon)" }, { label: "Safety Center (Coming Soon)" }, { label: "Contact" }] },
  { title: "Legal", links: [{ label: "Terms & Conditions", to: "/terms" }, { label: "Privacy Policy", to: "/privacy" }] },
  { title: "For Helpers", links: [{ label: "Register Interest" }, { label: "FAQs" }] },
];

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-black/5">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo className="h-14" />
            <p className="mt-3 text-sm text-[#4B5563] max-w-xs">Qareeb — Help is Always Near.</p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/5 bg-white text-[#1F2937] hover:text-[#FF6B2C] transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/5 bg-white text-[#1F2937] hover:text-[#FF6B2C] text-[11px] font-bold">
                TT
              </a>
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-[#1F2937]">{c.title}</h4>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-sm text-[#6B7280] hover:text-[#FF6B2C] transition-colors">{l.label}</Link>
                    ) : (
                      <a href={l.href ?? "#"} className="text-sm text-[#6B7280] hover:text-[#FF6B2C] transition-colors">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/5 pt-6">
          <p className="text-xs text-[#6B7280]">© 2026 Qareeb. All rights reserved.</p>
          <p className="text-xs text-[#6B7280] italic">Building trust, one connection at a time.</p>
        </div>
      </div>
    </footer>
  );
}

export function LegalPage({ title, intro, paragraphs }: { title: string; intro: string; paragraphs: string[] }) {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Nav homeHref="/" />
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, #FFD9C4 0%, rgba(255,217,196,0) 70%)" }} />
        <div className="relative mx-auto max-w-3xl px-5 pt-14 pb-6 sm:pt-20">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FF6B2C" }}>Legal</span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F2937]">{title}</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563]">{intro}</p>
        </div>
      </section>
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl border border-black/5 bg-white p-6 sm:p-9 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]">
            <div className="space-y-5">
              {paragraphs.map((p) => (
                <p key={p} className="text-[15px] sm:text-base leading-7 sm:leading-8 text-[#4B5563]">{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/" className="text-sm font-semibold text-[#FF6B2C] hover:underline">← Back to home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
