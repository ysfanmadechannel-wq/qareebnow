import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench, Truck, Sparkles, GraduationCap, HeartHandshake, Grid3x3,
  ShieldCheck, Star, UserRound, Siren, Clock, Wallet, Lock,
  ChevronDown, Search, Users, MessageCircle, CheckCircle2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandButton, Footer, Logo, Nav, SOCIAL_LINKS, TIKTOK_URL } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Qareeb — Help is Always Near" },
      { name: "description", content: "Qareeb connects you with verified local helpers nearby. Join the waitlist — launching soon." },
      { property: "og:title", content: "Qareeb — Help is Always Near" },
      { property: "og:description", content: "Qareeb connects you with verified local helpers nearby. Join the waitlist — launching soon." },
    ],
  }),
});


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, #FFD9C4 0%, rgba(255,217,196,0) 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-72 w-72 rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, #B9F1EC 0%, rgba(185,241,236,0) 70%)" }} />

      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#00C4B6]/30 bg-[#00C4B6]/10 px-3 py-1 text-xs font-medium"
          style={{ color: "#00C4B6" }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#00C4B6" }} />
          Launching soon
        </span>
        <div className="mt-8 flex flex-col items-center">
          <Logo className="h-24 sm:h-32" />
          <p className="mt-3 text-sm sm:text-base font-medium tracking-[0.18em] uppercase" style={{ color: "#00C4B6" }}>
            Help is Always Near
          </p>
        </div>
        <h1 className="mx-auto mt-8 max-w-3xl text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F2937] text-balance break-words">
          Pakistan's Trusted On-Demand Service Marketplace
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#4B5563] leading-relaxed">
          Qareeb is building a trusted platform to connect you with verified local helpers —
          and help helpers earn nearby. Launching soon.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <BrandButton href="#waitlist">Join the Waitlist</BrandButton>
          <BrandButton href="#waitlist" variant="outline">Follow for Updates</BrandButton>
        </div>
        <p className="mt-4 text-sm text-[#6B7280]">Be the first to know when we launch.</p>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-12">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FF6B2C" }}>{eyebrow}</span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1F2937]">{title}</h2>
      {subtitle && <p className="mt-3 text-[#4B5563] leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Search, title: "Choose a Service", desc: "Select the service you need." },
    { icon: Users, title: "Get Matched", desc: "We connect you with nearby verified helpers." },
    { icon: MessageCircle, title: "Connect Securely", desc: "Discuss, agree, and confirm the details." },
    { icon: CheckCircle2, title: "Get It Done", desc: "Task completed, you rate and review." },
  ];
  return (
    <section id="how" className="py-20 sm:py-24 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="How it works"
          title="How It Will Work"
          subtitle="We're building a simple, safe way to connect people who need help with verified helpers nearby."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] border border-black/5 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: "#FFF3EC", color: "#FF6B2C" }}>
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-extrabold text-[#F3F4F6]">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">{s.title}</h3>
              <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Wrench, title: "Home Services" },
    { icon: Truck, title: "Moving & Delivery" },
    { icon: Sparkles, title: "Cleaning" },
    { icon: GraduationCap, title: "Tutoring & Study Help" },
    { icon: HeartHandshake, title: "Women Services" },
    { icon: Grid3x3, title: "More Categories" },
  ];
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Services"
          title="Services We'll Offer"
          subtitle="From home repairs to tutoring — we're building a platform for all your everyday needs."
        />
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#FF6B2C]/30 hover:shadow-[0_8px_28px_-10px_rgba(255,107,44,0.25)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors"
                style={{ backgroundColor: "#FFF3EC", color: "#FF6B2C" }}>
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-semibold text-[#1F2937]">{s.title}</h3>
              <p className="mt-1 text-xs text-[#6B7280]">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const features = [
    { icon: ShieldCheck, title: "CNIC & OTP Verification" },
    { icon: Star, title: "Ratings & Reviews" },
    { icon: UserRound, title: "Female-Only Options" },
    { icon: Siren, title: "SOS Emergency Feature" },
  ];
  return (
    <section id="trust" className="py-20 sm:py-24 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Safety & Vision"
          title="Built on Trust"
          subtitle="We're designing Qareeb with safety and transparency at the core — because trust matters."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 border border-black/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "rgba(0,196,182,0.1)", color: "#00C4B6" }}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[#1F2937]">{f.title}</h3>
              <span className="mt-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
                style={{ backgroundColor: "rgba(0,196,182,0.1)", color: "#00A99C" }}>
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <SectionHeader eyebrow="About us" title="A neighborhood, reimagined." />
        <p className="text-lg leading-relaxed text-[#4B5563]">
          Qareeb was born from a simple idea: help should always be close by. We are building a
          trusted community where every connection is verified, every service is rated, and every
          person is treated with respect. Whether you need a task done or want to offer your
          skills, we're here to make it safe, simple, and human — launching soon.
        </p>
      </div>
    </section>
  );
}

function ForHelpers() {
  const benefits = [
    { icon: Clock, title: "Flexible Hours", desc: "Work when it suits you — full time or on the side." },
    { icon: Wallet, title: "Fair Earnings", desc: "Transparent pricing so you keep what you earn." },
    { icon: Lock, title: "Secure Payments", desc: "Get paid safely for every task you complete." },
  ];
  return (
    <section id="helpers" className="py-20 sm:py-24 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="For helpers"
          title="Looking to Earn?"
          subtitle="Qareeb will connect skilled professionals with people who need their help. Join us early."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-6 border border-black/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "#FFF3EC", color: "#FF6B2C" }}>
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[#1F2937]">{b.title}</h3>
              <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <BrandButton href="#waitlist">Register Your Interest</BrandButton>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is Qareeb?", a: "Qareeb is a platform being built to connect people with verified local helpers — and help helpers earn nearby." },
  { q: "When is Qareeb launching?", a: "We're currently in development. Join the waitlist to be the first to know." },
  { q: "What services will be available?", a: "Home services, cleaning, tutoring, moving, delivery, and more." },
  { q: "How will Qareeb verify helpers?", a: "Through CNIC and OTP verification before they can accept tasks." },
  { q: "Will it be safe?", a: "Yes. We're designing safety features like SOS buttons, female-only options, and a complaint system." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-black/5 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[#1F2937]">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#6B7280] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm text-[#4B5563] leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="py-20 sm:py-28 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(circle at 50% 40%, #FFE7D6 0%, transparent 60%)" }} />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1F2937]">
          Be the First to Know.
        </h2>
        <p className="mt-3 text-[#4B5563]">Qareeb is launching soon. Join the waitlist and stay updated.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#FF6B2C] focus:ring-4 focus:ring-[#FF6B2C]/15"
          />
          <BrandButton href="#waitlist">Join Waitlist</BrandButton>
        </form>
        <div className="mt-10">
          <p className="text-sm text-[#6B7280]">Follow us on social media</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-[#1F2937] hover:text-[#FF6B2C] hover:border-[#FF6B2C]/30 transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-[#1F2937] hover:text-[#FF6B2C] hover:border-[#FF6B2C]/30 transition-colors text-xs font-bold">
              TT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Landing() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Nav />
      <Hero />
      <HowItWorks />
      <Services />
      <Trust />
      <About />
      <ForHelpers />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
