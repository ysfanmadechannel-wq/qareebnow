import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Nav } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";
import { CATEGORY_GROUPS } from "@/data/categories";

export const Route = createFileRoute("/categories")({
  component: CategoriesPage,
  head: () => ({
    meta: [
      { title: "All Service Categories & Rates — Qareeb" },
      { name: "description", content: "Browse every Qareeb service category with indicative rates: home help, cleaning, care, repairs, beauty & grooming and more." },
      { property: "og:title", content: "All Service Categories & Rates — Qareeb" },
      { property: "og:description", content: "Browse every Qareeb service category with indicative rates: home help, cleaning, care, repairs, beauty & grooming and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <Nav homeHref="/" />

      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, #FFD9C4 0%, rgba(255,217,196,0) 70%)" }} />
        <div className="relative mx-auto max-w-4xl px-5 pt-14 pb-4 sm:pt-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FF6B2C" }}>Categories</span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">All Service Categories</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
            Every category Qareeb is building, with indicative rates. Services launch soon.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 pt-8">
        <div className="mx-auto max-w-5xl px-5 space-y-14">
          {CATEGORY_GROUPS.map((group) => (
            <Reveal key={group.title}>
              <div>
                <div className="border-l-4 pl-4" style={{ borderColor: "#00C4B6" }}>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{group.title}</h2>
                  {group.note && <p className="mt-1.5 text-sm text-[#6B7280]">{group.note}</p>}
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, i) => (
                    <Reveal key={item.name} delay={Math.min(i, 5) * 60}>
                      <div className="h-full rounded-2xl border border-black/5 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:border-[#FF6B2C]/30 hover:shadow-[0_8px_28px_-10px_rgba(255,107,44,0.2)] transition-all">
                        <h3 className="font-semibold leading-snug">{item.name}</h3>
                        {item.price && (
                          <span className="mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold"
                            style={{ backgroundColor: "#FFF3EC", color: "#FF6B2C" }}>
                            {item.price}
                          </span>
                        )}
                        {item.desc && <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">{item.desc}</p>}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <div className="text-center">
            <Link to="/" className="text-sm font-semibold text-[#FF6B2C] hover:underline">← Back to home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
