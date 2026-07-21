import logoIcon from "../assets/logo-icon.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper">
      <div className="container-content grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20">
        <div>
          <p className="eyebrow mb-4">About the Firm</p>
          <h2 className="font-display text-[32px] md:text-[38px] leading-[1.15] text-navy">
            Independent counsel, drawn from three decades inside the banking system.
          </h2>
        </div>
        <div className="space-y-6 text-slate-700 text-[15.5px] leading-relaxed">
          <p>
            Sharma Board &amp; Advisory Services is a boutique advisory firm dedicated to helping
            businesses strengthen governance, improve financial performance, and achieve
            sustainable growth. We provide practical, independent, and value-driven advisory
            solutions to MSMEs, startups, family-owned businesses, and established corporates.
          </p>
          <p>
            The practice is led personally by{" "}
            <span className="text-navy font-medium">Ashwani Sharma</span>, Former Deputy General
            Manager at PSU Bank, whose career spanned corporate credit, MSME finance, and
            risk management across some of India&rsquo;s most demanding lending environments. That
            vantage point &mdash; sitting across the table from thousands of businesses over 30
            years &mdash; shapes an advisory style that is candid, evidence-based, and unafraid to
            say what a board needs to hear rather than what it wants to hear.
          </p>
          <div className="pt-4 border-t border-navy-100 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-navy-100 flex items-center justify-center shrink-0 p-1.5">
              <img src={logoIcon} alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-navy font-medium text-sm">Ashwani Sharma</p>
              <p className="text-slate-500 text-[13px]">
                Founder &amp; Principal Advisor &middot; Certified Independent Director, IICA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
