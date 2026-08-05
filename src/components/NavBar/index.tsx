import React from "react";
import { SiGithub } from "react-icons/si";

export default function NavBar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-10 h-10 object-contain" alt="DNS Changer Logo" />
            <span className="text-white font-black text-xl tracking-tight">DNS Changer</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              target="_blank"
              href="https://github.com/DnsChanger/dnschanger-mobile"
              className="flex items-center gap-2 text-xs text-emerald-400 font-bold px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/80 transition-all"
              rel="noreferrer"
            >
              <SiGithub size={14} />
              <span>نسخه موبایل</span>
            </a>

            <a
              target="_blank"
              href="https://github.com/DnsChanger/dnsChanger-desktop"
              className="flex items-center gap-2 text-xs text-slate-200 font-bold px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
              rel="noreferrer"
            >
              <SiGithub size={14} />
              <span>نسخه دسکتاپ</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
