// import { useEffect, useState } from "react";
// import logoIcon from "../assets/logo-icon.png";

// const LINKS = [
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#why", label: "Why Us" },
//   { href: "#pricing", label: "Engagement" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//         scrolled ? "bg-paper/95 backdrop-blur border-b border-navy-100" : "bg-transparent"
//       }`}
//     >
//       <div className="container-content flex items-center justify-between h-20">
//         <a href="#top" className="flex items-center gap-3 group">
//           <img src={logoIcon} alt="Sharma Board & Advisory Services" className="h-10 w-auto object-contain" />
//           <span className="font-display text-[15px] leading-tight text-navy tracking-tight">
//             Sharma
//             <br />
//             <span className="text-[10.5px] font-body font-medium tracking-[0.16em] uppercase text-slate-500">
//               Board &amp; Advisory Services
//             </span>
//           </span>
//         </a>

//         <nav className="hidden md:flex items-center gap-9">
//           {LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className="text-[13px] font-medium tracking-wide text-slate-700 hover:text-navy transition-colors"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="text-[13px] font-semibold text-paper bg-navy hover:bg-navy-600 transition-colors px-5 py-2.5 rounded-sm"
//           >
//             Request a Consultation
//           </a>
//         </nav>

//         <button
//           className="md:hidden text-navy"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
//             <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-paper border-t border-navy-100 px-6 py-6 flex flex-col gap-5">
//           {LINKS.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="text-sm font-medium text-slate-700"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setOpen(false)}
//             className="text-sm font-semibold text-paper bg-navy px-5 py-3 rounded-sm text-center"
//           >
//             Request a Consultation
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import logoIcon from "../assets/logo-icon.png";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#pricing", label: "Engagement" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur border-b border-navy-100"
    >
      <div className="container-content flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logoIcon} alt="Sharma Board & Advisory Services" className="h-10 w-auto object-contain" />
          <span className="font-display text-[15px] leading-tight text-navy tracking-tight">
            Sharma
            <br />
            <span className="text-[10.5px] font-body font-medium tracking-[0.16em] uppercase text-slate-500">
              Board &amp; Advisory Services
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-slate-700 hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] font-semibold text-paper bg-navy hover:bg-navy-600 transition-colors px-5 py-2.5 rounded-sm"
          >
            Request a Consultation
          </a>
        </nav>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-navy-100 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-paper bg-navy px-5 py-3 rounded-sm text-center"
          >
            Request a Consultation
          </a>
        </div>
      )}
    </header>
  );
}