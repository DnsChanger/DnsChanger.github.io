import React from "react";
import { SiGithub, SiDiscord } from "react-icons/si";

export default function NavBar() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between py-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden  flex-shrink-0">
              <img src="/logo.png" className="w-full h-full object-contain" alt="DNS Changer Logo" />
            </div>
            <span className="text-white font-black text-lg tracking-tight">DNS Changer</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              target="_blank"
              href="https://discord.gg/p9TZzEV39e"
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#7289da] bg-[#7289da]/10 border border-[#7289da]/20 hover:bg-[#7289da]/20 transition-all duration-200"
              rel="noreferrer"
              title="Discord"
            >
              <SiDiscord size={16} />
            </a>

            <a
              target="_blank"
              href="https://github.com/DnsChanger/dnschanger-mobile"
              className="flex items-center gap-1.5 text-xs text-gray-300 font-bold px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
              rel="noreferrer"
            >
              <SiGithub size={13} />
              <span>نسخه موبایل</span>
            </a>

            <a
              target="_blank"
              href="https://github.com/DnsChanger/dnsChanger-desktop"
              className="flex items-center gap-1.5 text-xs text-gray-300 font-bold px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
              rel="noreferrer"
            >
              <SiGithub size={13} />
              <span>نسخه دسکتاپ</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
