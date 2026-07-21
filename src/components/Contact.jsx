// import { useState } from "react";

// const initialForm = { name: "", email: "", phone: "", company: "", message: "" };
// const CONTACT_EMAIL = "ashwani@sharmaboardadvisory.com";

// export default function Contact() {
//   const [form, setForm] = useState(initialForm);
//   const [sent, setSent] = useState(false);

//   const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const subject = `Consultation Request — ${form.name || "New Enquiry"}${
//       form.company ? ` (${form.company})` : ""
//     }`;
//     const bodyLines = [
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       form.phone && `Phone: ${form.phone}`,
//       form.company && `Company: ${form.company}`,
//       "",
//       form.message,
//     ].filter(Boolean);
//     const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
//     window.location.href = mailto;
//     setSent(true);
//   };

//   return (
//     <section id="contact" className="py-24 md:py-32 bg-navy-100/40">
//       <div className="container-content grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20">
//         <div>
//           <p className="eyebrow mb-4">Contact</p>
//           <h2 className="font-display text-[32px] md:text-[38px] text-navy leading-[1.15] mb-8">
//             Request a confidential consultation.
//           </h2>

//           <dl className="space-y-6 text-[14.5px]">
//             <div>
//               <dt className="text-navy font-medium">Ashwani Sharma</dt>
//               <dd className="text-slate-500">Founder &amp; Principal Advisor</dd>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-brass-600 text-xs">TEL</span>
//               <a href="tel:+917838094105" className="text-slate-700 hover:text-navy">
//                 +91 78380 94105
//               </a>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-brass-600 text-xs">MAIL</span>
//               <a
//                 href={`mailto:${CONTACT_EMAIL}`}
//                 className="text-slate-700 hover:text-navy break-all"
//               >
//                 {CONTACT_EMAIL}
//               </a>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="font-mono text-brass-600 text-xs mt-0.5">LOC</span>
//               <span className="text-slate-700">
//                 Great Value Sharnam, Sector 107,
//                 <br />
//                 Noida &ndash; 201301
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-brass-600 text-xs">GST</span>
//               <span className="text-slate-700">09ACLPS3547D1ZC</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-brass-600 text-xs">WEB</span>
//               <a
//                 href="https://www.sharmaboardadvisory.com"
//                 className="text-slate-700 hover:text-navy"
//               >
//                 www.sharmaboardadvisory.com
//               </a>
//             </div>
//           </dl>
//         </div>

//         <form onSubmit={onSubmit} className="bg-paper border border-navy-100 rounded-sm p-8 md:p-10">
//           <div className="grid sm:grid-cols-2 gap-6 mb-6">
//             <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
//             <Field
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="grid sm:grid-cols-2 gap-6 mb-6">
//             <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
//             <Field label="Company" name="company" value={form.company} onChange={onChange} />
//           </div>
//           <div className="mb-8">
//             <label className="block text-[11px] font-mono tracking-[0.14em] uppercase text-slate-500 mb-2">
//               How can we help?
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={onChange}
//               required
//               rows={5}
//               className="w-full border border-navy-100 bg-white px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-brass/50 focus:border-brass rounded-sm resize-none"
//               placeholder="Briefly describe your company and the advisory support you're looking for."
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-600 text-paper font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors"
//           >
//             Send Request
//           </button>
//           <p className="mt-3 text-[12.5px] text-slate-500">
//             Opens your email app with this note addressed to {CONTACT_EMAIL}.
//           </p>

//           {sent && (
//             <p className="mt-4 text-[13.5px] text-green-700 bg-green-50 border border-green-200 rounded-sm px-4 py-3">
//               Your email app should now be open with this message ready to send.
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

// function Field({ label, name, value, onChange, type = "text", required = false }) {
//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="block text-[11px] font-mono tracking-[0.14em] uppercase text-slate-500 mb-2"
//       >
//         {label}
//         {required && <span className="text-brass-600"> *</span>}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="w-full border border-navy-100 bg-white px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-brass/50 focus:border-brass rounded-sm"
//       />
//     </div>
//   );
// }



// add email and phone number to contact form and add a note that the email app will open with the message ready to send.

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = { name: "", email: "", phone: "", company: "", message: "" };
const CONTACT_EMAIL = "ashwani@sharmaboardadvisory.com";

// TODO: Apne EmailJS dashboard se ye teeno values yaha daalein
// const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "service_iy6o9yn";
const EMAILJS_TEMPLATE_ID = "template_gbb3wbb";
const EMAILJS_PUBLIC_KEY = "xWeViKIz67x66RMFs";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone || "Not provided",
      company: form.company || "Not provided",
      message: form.message,
      to_email: CONTACT_EMAIL,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("sent");
        setForm(initialForm);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-100/40">
      <div className="container-content grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-[32px] md:text-[38px] text-navy leading-[1.15] mb-8">
            Request a confidential consultation.
          </h2>

          <dl className="space-y-6 text-[14.5px]">
            <div>
              <dt className="text-navy font-medium">Ashwani Sharma</dt>
              <dd className="text-slate-500">Founder &amp; Principal Advisor</dd>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brass-600 text-xs">TEL</span>
              <a href="tel:+917838094105" className="text-slate-700 hover:text-navy">
                +91 78380 94105
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brass-600 text-xs">MAIL</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-slate-700 hover:text-navy break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-brass-600 text-xs mt-0.5">LOC</span>
              <span className="text-slate-700">
                Great Value Sharnam, Sector 107,
                <br />
                Noida &ndash; 201301
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brass-600 text-xs">GST</span>
              <span className="text-slate-700">09ACLPS3547D1ZC</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brass-600 text-xs">WEB</span>
              <a
                href="https://www.sharmaboardadvisory.com"
                className="text-slate-700 hover:text-navy"
              >
                www.sharmaboardadvisory.com
              </a>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="bg-paper border border-navy-100 rounded-sm p-8 md:p-10">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
            <Field label="Company" name="company" value={form.company} onChange={onChange} />
          </div>
          <div className="mb-8">
            <label className="block text-[11px] font-mono tracking-[0.14em] uppercase text-slate-500 mb-2">
              How can we help?
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="w-full border border-navy-100 bg-white px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-brass/50 focus:border-brass rounded-sm resize-none"
              placeholder="Briefly describe your company and the advisory support you're looking for."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-600 disabled:opacity-60 disabled:cursor-not-allowed text-paper font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>
          <p className="mt-3 text-[12.5px] text-slate-500">
            Your message will be sent directly to {CONTACT_EMAIL}.
          </p>

          {status === "sent" && (
            <p className="mt-4 text-[13.5px] text-green-700 bg-green-50 border border-green-200 rounded-sm px-4 py-3">
              Thank you — your message has been sent. We'll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-[13.5px] text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
              Something went wrong sending your message. Please try again or email us directly at {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-mono tracking-[0.14em] uppercase text-slate-500 mb-2"
      >
        {label}
        {required && <span className="text-brass-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-navy-100 bg-white px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:ring-2 focus:ring-brass/50 focus:border-brass rounded-sm"
      />
    </div>
  );
}