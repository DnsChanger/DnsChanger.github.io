import React from "react";
import { RiUbuntuFill, RiAndroidFill } from "react-icons/ri";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";

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
    <header className="py-16 md:py-24 px-4 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-right">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-sm font-semibold cursor-pointer hover:bg-emerald-900/80 transition-all shadow-sm"
            onClick={() => onClick(MOBILE_RELEASES_URL)}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📱 نسخه اندروید (موبایل) منتشر شد!</span>
            <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">جدید</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            DNS Changer
          </h1>

          <p className="text-lg md:text-xl font-normal text-slate-300 leading-relaxed text-justify">
            یک ابزار رایگان و متن‌باز برای مدیریت و تغییر سریع تنظیمات DNS در دسکتاپ و موبایل. با استفاده از این برنامه می‌توانید به سادگی از DNSهای امن و سریع استفاده کنید.
          </p>

          <div className="pt-4 space-y-4">
            <p className="text-base font-bold text-slate-200">
              دانلود برای سیستم‌عامل‌های مختلف:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              <div
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-emerald-500 cursor-pointer transition-all duration-200 group relative shadow-sm"
                onClick={() => onClick(MOBILE_RELEASES_URL)}
              >
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                  موبایل
                </span>
                <RiAndroidFill size={32} className="text-slate-300 group-hover:text-emerald-400 transition-colors" />
                <p className="text-sm font-bold text-white mt-2">اندروید</p>
                <span className="text-[11px] text-slate-400 mt-0.5">APK / Mobile</span>
              </div>

              <div
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-blue-500 cursor-pointer transition-all duration-200 group shadow-sm"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
              >
                <AiFillWindows size={32} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                <p className="text-sm font-bold text-white mt-2">ویندوز</p>
                <span className="text-[11px] text-slate-400 mt-0.5">Desktop</span>
              </div>

              <div
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-amber-500 cursor-pointer transition-all duration-200 group shadow-sm"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
              >
                <RiUbuntuFill size={32} className="text-slate-300 group-hover:text-amber-400 transition-colors" />
                <p className="text-sm font-bold text-white mt-2">لینوکس</p>
                <span className="text-[11px] text-slate-400 mt-0.5">Desktop</span>
              </div>

              <div
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-purple-500 cursor-pointer transition-all duration-200 group shadow-sm"
                onClick={() => onClick(DESKTOP_RELEASES_URL)}
              >
                <AiFillApple size={32} className="text-slate-300 group-hover:text-purple-400 transition-colors" />
                <p className="text-sm font-bold text-white mt-2">مک</p>
                <span className="text-[11px] text-slate-400 mt-0.5">Desktop</span>
              </div>

              <div
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-400 cursor-pointer transition-all duration-200 group shadow-sm"
                onClick={() => onClick(NPM_URL)}
              >
                <FiTerminal size={32} className="text-slate-300 group-hover:text-white transition-colors" />
                <p className="text-sm font-bold text-white mt-2">خط فرمان</p>
                <span className="text-[11px] text-slate-400 mt-0.5">CLI / NPM</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-slate-400 font-medium">⭐ حمایت از پروژه با دادن ستاره در گیت‌هاب</p>
              <div className="flex flex-wrap items-center gap-2" dir="ltr">
                <img src="https://img.shields.io/github/stars/DnsChanger/dnsChanger-desktop?label=Desktop%20Stars" alt="Desktop Stars" />
                <img src="https://img.shields.io/github/stars/DnsChanger/dnschanger-mobile?label=Mobile%20Stars" alt="Mobile Stars" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-2xl overflow-hidden">
            <img width="100%" alt="DNS Changer" src="app.png" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}

