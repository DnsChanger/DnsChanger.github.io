import { SiDiscord, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-normal text-sm text-slate-400 text-center md:text-right max-w-xl">
            ©{new Date().getFullYear()} تمامی محتویات و کدهای این پروژه تحت
            مجوز MIT منتشر شده‌اند. پروژه به صورت آزاد و متن‌باز توسط تیم DnsChanger توسعه داده می‌شود.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DnsChanger/dnschanger-mobile"
              target="_blank"
              className="text-xs text-slate-300 hover:text-emerald-400 transition-colors font-medium"
              rel="noreferrer"
            >
              نسخه موبایل
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://github.com/DnsChanger/dnsChanger-desktop"
              target="_blank"
              className="text-xs text-slate-300 hover:text-blue-400 transition-colors font-medium"
              rel="noreferrer"
            >
              نسخه دسکتاپ
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://github.com/dnsChanger"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
              rel="noreferrer"
              title="GitHub Organization"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://discord.gg/p9TZzEV39e"
              target="_blank"
              className="text-slate-400 hover:text-[#5865F2] transition-colors"
              rel="noreferrer"
              title="Discord Community"
            >
              <SiDiscord size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
