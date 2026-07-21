const SERVICES = [
  {
    title: "Board Advisory & Corporate Governance",
    body: "Board structuring, governance frameworks, and compliance rigor aligned to Companies Act and listing requirements.",
  },
  {
    title: "Independent Director Services",
    body: "IICA-empanelled independent director engagements bringing impartial oversight to board and committee deliberations.",
  },
  {
    title: "Strategic Financial Advisory",
    body: "Capital structuring, financial planning, and decision support for boards navigating growth or restructuring.",
  },
  {
    title: "Working Capital & Project Finance Advisory",
    body: "Structuring and appraisal of working capital and term lending proposals, drawn from three decades of bank-side underwriting.",
  },
  {
    title: "MSME Growth & Funding Solutions",
    body: "Funding readiness, lender engagement, and growth-stage financial planning built for MSME realities.",
  },
  {
    title: "Credit Assessment & Risk Management",
    body: "Independent credit appraisal and risk-control frameworks benchmarked to banking-grade standards.",
  },
  {
    title: "Business Strategy & Performance Improvement",
    body: "Operating and financial performance reviews that translate into board-actionable recommendations.",
  },
  {
    title: "Banking & Financial Sector Consulting",
    body: "Advisory support for banks, NBFCs, and financial institutions on credit, governance, and operating practice.",
  },
  {
  title: "Forex & International Exposure",
  body: "Advisory support for international business operations, corporate finance, and global funding solutions through International Business Branch, Corporate Finance Branch, and International Syndication Branch."
}
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-100/40">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Advisory Agenda</p>
            <h2 className="font-display text-[32px] md:text-[38px] text-navy leading-[1.15] max-w-xl">
              Nine items on the agenda, every one board-facing.
            </h2>
          </div>
          <p className="text-slate-600 text-[14.5px] max-w-sm leading-relaxed">
            Each engagement is scoped as a discrete workstream &mdash; the way a well-run board
            reviews a discrete agenda item, with a clear brief and a clear owner.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 border-t border-navy-100">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className="group flex gap-6 py-7 px-1 border-b border-navy-100 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <span className="font-mono text-[13px] text-brass-600 pt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[18px] text-navy mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
