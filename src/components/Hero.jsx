import founderPhoto from "../assets/founder.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-40 pb-28 md:pt-48 md:pb-32">
      {/* faint ledger-line texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 41px, #F1E6CE 42px)",
        }}
      />
      <div className="container-content relative grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <p className="eyebrow text-brass-100/90 mb-6">
            Corporate Governance · Independent Director Services · Strategic Financial Advisory
          </p>
          <h1 className="font-display text-[42px] leading-[1.08] md:text-[58px] md:leading-[1.06] text-paper mb-7">
            Guiding businesses.
            <br />
            Strengthening boards.
            <br />
            <span className="italic text-brass-100">Creating long‑term value.</span>
          </h1>
          <p className="text-slate-300 text-[16px] md:text-[17px] leading-relaxed max-w-xl mb-10">
            A boutique advisory practice founded by{" "}
            <span className="text-paper font-medium">Ashwani Sharma</span>, Former Deputy General
            Manager, PSU Bank (Retd.) — three decades of institutional banking behind every
            engagement.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brass hover:bg-brass-600 text-navy font-semibold text-sm px-7 py-3.5 rounded-sm transition-colors"
            >
              Request a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-paper/90 text-sm font-medium border-b border-paper/30 hover:border-paper pb-0.5 transition-colors"
            >
              View Advisory Services
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7">
          <div className="relative w-56 md:w-64">
            <div className="absolute -inset-2.5 border border-brass-100/40 rounded-sm" />
            <img
              src={founderPhoto}
              alt="Ashwani Sharma, Founder & Principal Advisor"
              className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
          <p className="font-display text-paper text-[15px]">Ashwani Sharma</p>
          <p className="-mt-6 text-brass-100/80 text-[11px] tracking-[0.14em] uppercase font-mono">
            Founder &amp; Principal Advisor
          </p>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 font-mono text-paper pt-2">
            <div>
              <dt className="text-[26px] leading-none text-brass-100">30+</dt>
              <dd className="text-[10.5px] mt-2 tracking-wide text-slate-400 uppercase">
                Years in Banking &amp; Finance
              </dd>
            </div>
            <div>
              <dt className="text-[26px] leading-none text-brass-100">IICA</dt>
              <dd className="text-[10.5px] mt-2 tracking-wide text-slate-400 uppercase">
                Certified Independent Director
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
