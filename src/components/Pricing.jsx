// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-24 md:py-32 bg-paper">
//       <div className="container-content">
//         <p className="eyebrow mb-4">Professional Advisory Plans</p>
//         <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-14">
//           <h2 className="font-display text-[32px] md:text-[38px] text-navy leading-[1.15] max-w-xl">
//             Engagement models scoped to the size and stage of your business.
//           </h2>
//         </div>

//         <div className="border border-navy-100 rounded-sm overflow-hidden">
//           <div className="grid md:grid-cols-[1.3fr_1fr] bg-navy text-paper">
//             <div className="p-10 md:p-12">
//               <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-brass-100/90 mb-4">
//                 Starting Plan
//               </p>
//               <p className="font-display text-[44px] md:text-[52px] leading-none mb-2">
//                 &#8377;5,000
//                 <span className="text-[16px] font-body text-slate-300 font-normal">
//                   {" "}
//                   / month, per company + GST
//                 </span>
//               </p>
//               <p className="text-slate-300 text-[15px] leading-relaxed max-w-md mt-6">
//                 A retained advisory engagement covering board and governance support, scoped to
//                 your company&rsquo;s current stage. Every plan is customized after an initial
//                 consultation — no engagement begins without a clear, mutually agreed brief.
//               </p>
//             </div>
//             <div className="p-10 md:p-12 bg-navy-700 flex flex-col justify-center gap-4">
//               {[
//                 "Scoped to your company's size and governance needs",
//                 "Direct engagement with the principal advisor",
//                 "Confidential, retainer-based advisory relationship",
//                 "Flexible scope — board, financial, or MSME-focused",
//               ].map((t) => (
//                 <div key={t} className="flex items-start gap-3">
//                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brass-100 shrink-0" />
//                   <p className="text-[14px] text-paper/90 leading-relaxed">{t}</p>
//                 </div>
//               ))}
//               <a
//                 href="#contact"
//                 className="mt-4 inline-flex w-fit items-center gap-2 bg-brass hover:bg-brass-600 text-navy font-semibold text-sm px-6 py-3 rounded-sm transition-colors"
//               >
//                 Discuss Your Engagement
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-paper">
      <div className="container-content">
        <p className="eyebrow mb-4">Professional Advisory Plans</p>
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-14">
          <h2 className="font-display text-[32px] md:text-[38px] text-navy leading-[1.15] max-w-xl">
            Engagement models scoped to the size and stage of your business.
          </h2>
        </div>

        <div className="border border-navy-100 rounded-sm overflow-hidden">
          <div className="grid md:grid-cols-[1.3fr_1fr] bg-navy text-paper">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-brass-100/90 mb-4">
                Advisory Engagement
              </p>
              <h3 className="font-display text-[28px] md:text-[34px] leading-tight mb-6">
                Book an online consultation to discuss your engagement.
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed max-w-md">
                A retained advisory engagement covering board and governance support, scoped to
                your company&rsquo;s current stage. Every plan is customized after an initial
                consultation — no engagement begins without a clear, mutually agreed brief.
              </p>
            </div>
            <div className="p-10 md:p-12 bg-navy-700 flex flex-col justify-center gap-4">
              {[
                "Scoped to your company's size and governance needs",
                "Direct engagement with the principal advisor",
                "Confidential, retainer-based advisory relationship",
                "Flexible scope — board, financial, or MSME-focused",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brass-100 shrink-0" />
                  <p className="text-[14px] text-paper/90 leading-relaxed">{t}</p>
                </div>
              ))}

              <a
                href="#contact"
                className="mt-4 inline-flex w-fit items-center gap-2 bg-brass hover:bg-brass-600 text-navy font-semibold text-sm px-6 py-3 rounded-sm transition-colors"
              >
                Book Online Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}