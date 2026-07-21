import logoIcon from "../assets/logo-icon.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400 py-10">
      <div className="container-content flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px]">
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="" className="h-7 w-auto object-contain" />
          <span className="text-slate-300">Sharma Board &amp; Advisory Services</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Sharma Board &amp; Advisory Services. All rights reserved.</p>
        <p className="text-slate-500">GSTIN: 09ACLPS3547D1ZC</p>
      </div>
    </footer>
  );
}
