import { SiDiscord, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-7 h-7 object-contain opacity-60" alt="DNS Changer" />
          <p className="text-sm text-gray-600">
            ©{new Date().getFullYear()} DNS Changer — منتشر شده تحت مجوز MIT
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/DnsChanger/dnschanger-mobile"
            target="_blank"
            className="text-xs text-gray-600 hover:text-gray-300 transition-colors duration-200 font-medium"
            rel="noreferrer"
          >
            نسخه موبایل
          </a>
          <span className="w-px h-3.5 bg-white/10" />
          <a
            href="https://github.com/DnsChanger/dnsChanger-desktop"
            target="_blank"
            className="text-xs text-gray-600 hover:text-gray-300 transition-colors duration-200 font-medium"
            rel="noreferrer"
          >
            نسخه دسکتاپ
          </a>
          <span className="w-px h-3.5 bg-white/10" />
          <a
            href="https://github.com/dnsChanger"
            target="_blank"
            className="text-gray-600 hover:text-white transition-colors duration-200"
            rel="noreferrer"
            title="GitHub Organization"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://discord.gg/p9TZzEV39e"
            target="_blank"
            className="text-gray-600 hover:text-[#7289da] transition-colors duration-200"
            rel="noreferrer"
            title="Discord Community"
          >
            <SiDiscord size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
