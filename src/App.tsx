import { SiGithub, SiDiscord } from "react-icons/si"
function App() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img src="/logo.png" className="w-10" />
            <div className="flex">
              <a href="#" className="text-white hover:text-gray-400 ml-8">خانه</a>
              <a href="https://github.com/DnsChanger" target="_blank" className="text-white hover:text-gray-400 ml-8">
                مخزن گیت هاب
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="flex-grow flex items-center justify-center py-16">
        <div className="mx-auto px-4">
          <h1 className="text-6xl font-bold text-center text-gray-900 mb-8">dnsChanger-desktop</h1>
          <p className="text-2xl text-center text-gray-700 mb-8">با dnsChanger-desktop می‌توانید DNS رایانه شخصی خود را تغییر داده و از سایت‌های مسدود شده داخل کشور بازدید کنید.</p>
          <div className="flex flex-row gap-4">
            <div>
              <img src="https://img.shields.io/github/downloads/DnsChanger/dnsChanger-desktop/total.svg" />
            </div>
            <div>
              <img src="https://img.shields.io/github/languages/top/DnsChanger/dnsChanger-desktop" />
            </div>
            <div>
              <img src="https://img.shields.io/github/languages/count/DnsChanger/dnsChanger-desktop" />
            </div>
          </div>
          <div className="mt-10 container">
            <div>
              <a href="https://github.com/DnsChanger/dnsChanger-desktop/releases/tag/v1.3.0" target="_blank" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg">نصب dnsChanger-desktop</a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">ویژگی‌های dnsChanger-desktop</h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">تغییر آسان DNS رایانه شخصی</div>
                <p className="text-gray-700 text-base">
                  با dnsChanger-desktop به سادگی می‌توانید DNS رایانه خود را تغییر دهید.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">پشتیبانی از DNS مختلف</div>
                <p className="text-gray-700 text-base">
                  dnsChanger-desktop از بیش از ۳۰۰۰ DNS مختلف پشتیبانی می‌کند.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">بدون محدودیت سرعت</div>
                <p className="text-gray-700 text-base">
                  dnsChanger-desktop هیچگونه محدودیتی در سرعت اینترنت شما ایجاد نمی‌کند.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">حفاظت از حریم شخصی</div>
                <p className="text-gray-700 text-base">
                  با استفاده از dnsChanger-desktop، از جمله امکانات مفید حفاظت از حریم شخصی کاربر است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">تصاویر dnsChanger-desktop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://github.com/DnsChanger/dnsChanger-desktop/raw/main/github/scr1.png" alt="تصویر ۱" className="w-full" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://github.com/DnsChanger/dnsChanger-desktop/raw/main/github/scr2.png" alt="تصویر ۲" className="w-full" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://github.com/DnsChanger/dnsChanger-desktop/raw/main/github/scr3.png" alt="تصویر ۳" className="w-full" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://github.com/DnsChanger/dnsChanger-desktop/raw/main/github/scr4.png" alt="تصویر ۴" className="w-full" />
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <p>
              <p>© {new Date().getFullYear()} تمامی محتویات و کدهای این پروژه تحت مجوز MIT منتشر شده‌اند. شما می‌توانید به‌صورت آزاد از این پروژه استفاده کنید و حقوق مالکیت فکری آن متعلق به توسعه‌دهندگان اصلی می‌باشد.</p>
            </p>
            <div className="flex">
              <a href="https://github.com/dnsChanger" target="_blank" className="ml-4"><SiGithub /></a>
              <a href="https://discord.gg/p9TZzEV39e" target="_blank" className="ml-4"><SiDiscord /></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Developed By ChatGpt 🤖❤️

export default App;
