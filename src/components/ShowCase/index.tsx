import React from "react";
import { RiUbuntuFill } from "react-icons/ri";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";

export default function ShowCase() {
  const GITHUB_RELEASES_URL =
    "https://github.com/DnsChanger/dnsChanger-desktop/releases/latest";
  const NPM_URL = "https://www.npmjs.com/package/dnschanger-cli";

  function onClick(url: string) {
    // open new tab
    window.open(url, "_blank");
  }

  return (
    <header className="py-20">
      <div className="md:flex md:flex-row md:max-w-6xl items-center md:mx-auto">
        <div className="flex-2 space-y-6 md:ml-20 mr-1">
          <h1 className="text-6xl font-sans text-center font-bold text-gray-900">
            DNS Changer
          </h1>
          <div>
            <p className="text-xl font-light text-justify text-gray-600">
              یک نرم‌افزار متن‌باز است که با استفاده از آن، کاربران می‌توانند با
              سادگی تنظیمات DNS خود را تغییر دهند و به این ترتیب، از دسترسی به
              اینترنت با سرعت و کارایی بالاتری برخوردار شوند.
            </p>
            <div className="mt-10">
              <p className="text-xl text-gray-700 self-start mb-2">
                بارگیری برای سیستم‌عامل‌های مختلف:
              </p>
              <div className="flex flex-col items-center divide-y-2">
                <div className="w-full flex flex-row flex-wrap  mb-8 gap-3">
                  <div
                    className="flex-1 flex items-center justify-center p-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onClick(GITHUB_RELEASES_URL)}
                  >
                    <AiFillWindows size={30} />
                    <p className="text-gray-500">ویندوز</p>
                  </div>

                  <div
                    className="flex-1 flex items-center justify-center p-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onClick(GITHUB_RELEASES_URL)}
                  >
                    <RiUbuntuFill size={30} />
                    <p className="text-gray-500">لینوکس</p>
                  </div>

                  <div
                    className="flex-1 flex items-center justify-center p-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onClick(GITHUB_RELEASES_URL)}
                  >
                    <AiFillApple size={30} />
                    <p className="text-gray-500">مک</p>
                  </div>

                  <div
                    className="flex-1 flex items-center justify-center p-4 gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onClick(NPM_URL)}
                  >
                    <FiTerminal size={30} />
                    <p className="text-gray-500 text-sm">تحت خط‌فرمان</p>
                  </div>
                </div>
                <div className="w-full pt-8 flex items-center justify-between">
                  <p className="text-gray-500"> بعد از نصب ⭐ فراموش نشه</p>
                  <div className="flex items-center">
                    <div
                      className="flex flex-grow justify-center gap-1"
                      dir="ltr"
                    >
                      <div>
                        <img src="https://img.shields.io/github/downloads/DnsChanger/dnsChanger-desktop/total.svg" />
                      </div>
                      <div>
                        <img src="https://img.shields.io/github/stars/dnsChanger/dnsChanger-desktop" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <div className="hidden md:block xl:block sm:block">
            <img width="100%" alt="DNS Changer" src="app.png" />
          </div>
        </div>
      </div>
    </header>
  );
}
