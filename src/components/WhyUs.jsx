const POINTS = [
  {
    label: "Track Record",
    title: "30+ years of banking & financial services experience",
  },
  { label: "Seniority", title: "Former Deputy General Manager, PSU Bank" },
  { label: "Credential", title: "IICA-certified Independent Director" },
  { label: "Domain", title: "Deep expertise in corporate credit & MSME finance" },
  { label: "Approach", title: "Practical, ethical, and strictly confidential advisory" },
  { label: "Engagement", title: "Personalized attention — direct access to the principal advisor" },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 bg-navy text-paper relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 41px, #F1E6CE 42px)",
        }}
      />
      <div className="container-content relative">
        <p className="eyebrow text-brass-100/90 mb-4">Why Choose Us</p>
        <h2 className="font-display text-[32px] md:text-[38px] leading-[1.15] max-w-2xl mb-16">
          What a bank-side career teaches you about running a good board.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {POINTS.map((p) => (
            <div key={p.title} className="border-t border-paper/15 pt-5">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brass-100/80 mb-3">
                {p.label}
              </p>
              <p className="text-[16px] leading-snug text-paper/95">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
