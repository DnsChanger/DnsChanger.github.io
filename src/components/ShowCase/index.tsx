import { RiUbuntuFill } from "react-icons/ri";
import { AiFillApple, AiFillWindows } from "react-icons/ai";

export default function ShowCase() {
  return (
    <header className="py-20">
      <div className="md:flex md:flex-row md:max-w-6xl items-center md:mx-auto">
        <div className="flex-1 space-y-6 md:ml-20">
          <h1 className="text-6xl font-sans text-center font-bold text-gray-900">
            DNS Changer
          </h1>
          <div>
            <p className="text-xl font-light text-justify text-gray-600">
              یک نرم افزار متن باز است که با استفاده از آن، کاربران می‌توانند با
              سادگی تنظیمات DNS خود را تغییر دهند و به این ترتیب، از دسترسی به
              اینترنت با سرعت و کارایی بالاتری برخوردار شوند.

            </p>
            <div className="mt-10">
              <div className="mt-10 flex flex-col items-center divide-y-2">
                <div className="w-full flex flex-row gap-2 mb-8">
                  <a
                    target="_blank"
                    href="https://github.com/DnsChanger/dnsChanger-desktop/releases/latest"
                    className="flex-1 flex items-center bg-blue-500 text-white rounded-md px-4 py-2 shadow-sm transition-all select-none hover:bg-blue-600"
                  >
                    <AiFillWindows />
                    <span className="flex-1 text-sm leading-5 text-center">
                      دانلود نسخه <br />
                      ویندوز
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/DnsChanger/dnsChanger-desktop/releases/latest"
                    className="flex-1 flex items-center bg-blue-500 text-white rounded-md px-4 py-2 shadow-sm transition-all select-none hover:bg-blue-600"
                  >
                    <RiUbuntuFill />
                    <span className="flex-1 text-sm leading-5 text-center">
                      دانلود نسخه <br />
                      لینوکس
                    </span>
                  </a>
                  <button
                    className="flex-1 flex items-center bg-blue-500 text-white rounded-md px-4 py-2 shadow-sm transition-all select-none  hover:bg-blue-600"
                  >
                    <AiFillApple />
                    <span className="flex-1 text-sm leading-5 text-center">
                      دانلود نسخه مک <br />
                    </span>
                  </button>
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
        <div className="flex-1">
          <div className="hidden md:block xl:block sm:block">
            <img
              width="100%"
              alt="DNS Changer"
              src="https://github.com/DnsChanger/dnsChanger-desktop/raw/main/.github/1.png?raw=true"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
