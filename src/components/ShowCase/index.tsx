import React from "react";
import { RiUbuntuFill, RiAndroidFill } from "react-icons/ri";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

interface PlatformCardProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  onClick: () => void;
  accentClass: string;
}

function PlatformCard({ icon, label, sub, onClick, accentClass }: PlatformCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer transition-all duration-300 glass-card hover:scale-[1.04] hover:ring-1 ${accentClass}`}
    >
      <div className="mb-3  transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="text-sm font-bold text-white">{label}</p>
      <span className="text-[11px] text-gray-500 mt-0.5">{sub}</span>
    </div>
  );
}

export default function ShowCase() {
  const DESKTOP_RELEASES_URL =
    "https://github.com/DnsChanger/dnsChanger-desktop/releases/latest";
  const MOBILE_RELEASES_URL =
    "https://github.com/DnsChanger/dnschanger-mobile/releases/latest";
  const NPM_URL = "https://www.npmjs.com/package/dnschanger-cli";

  function onClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <header className="relative overflow-hidden py-20 md:py-32 px-5">
      <div
        className="hero-glow w-[600px] h-[600px] top-[-200px] right-[-100px] bg-emerald-500/10 animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="hero-glow w-[400px] h-[400px] bottom-[-100px] left-[-50px] bg-emerald-700/8 animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-right animate-fade-up">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-5">
              DNS Changer
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-loose text-justify max-w-xl">
              یک ابزار رایگان و متن‌باز برای مدیریت و تغییر سریع تنظیمات DNS در دسکتاپ و موبایل. با استفاده از این برنامه می‌توانید به سادگی از DNSهای امن و سریع استفاده کنید.
            </p>
          </div>

          <div className="space-y-4 animate-fade-up-delay-1">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              دانلود برای سیستم‌عامل‌های مختلف
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              <PlatformCard
                icon={<RiAndroidFill size={30} className="text-emerald-400" />}
                label="اندروید"
                sub="APK"
                onClick={() => onClick(MOBILE_RELEASES_URL)}
                accentClass="hover:ring-emerald-500/30"
              />
              <PlatformCard
                icon={<AiFillWindows size={30} className="text-sky-400" />}
                label="ویندوز"
                sub="Desktop"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
                accentClass="hover:ring-sky-500/30"
              />
              <PlatformCard
                icon={<RiUbuntuFill size={30} className="text-orange-400" />}
                label="لینوکس"
                sub="Desktop"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
                accentClass="hover:ring-orange-500/30"
              />
              <PlatformCard
                icon={<AiFillApple size={30} className="text-violet-400" />}
                label="مک"
                sub="Desktop"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
                accentClass="hover:ring-violet-500/30"
              />
              <PlatformCard
                icon={<FiTerminal size={28} className="text-gray-300" />}
                label="خط فرمان"
                sub="CLI / NPM"
                onClick={() => onClick(NPM_URL)}
                accentClass="hover:ring-gray-500/30"
              />
            </div>
          </div>

  
        </div>

        <div className="flex-1 w-full max-w-md md:max-w-none animate-fade-up-delay-3">
          <div className="animate-float relative">
            <div className="absolute inset-0 rounded-3xl bg-emerald-500/5 blur-2xl scale-95 animate-glow-pulse" />
            <div className="relative rounded-3xl p-[1px] bg-white/[0.06]">
              <div className="rounded-3xl overflow-hidden bg-[#0f1117] p-2">
                <img
                  width="100%"
                  alt="DNS Changer App"
                  src="app.png"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
