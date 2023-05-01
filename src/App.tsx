import { SiGithub, SiDiscord } from "react-icons/si"
import { HomePageImages } from "./constant/imgsUrl";
import { features } from "./constant/features";
import { Feature } from "./interfaces/feature.interface";


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
      <header className="py-16">

        <div className="mx-auto px-4">
          <h1 className="text-6xl font-bold text-center text-gray-900 mb-8">dnsChanger-desktop</h1>
          <p className="text-2xl text-center text-gray-700 mb-8">با dnsChanger-desktop می‌توانید DNS رایانه شخصی خود را تغییر داده و از سایت‌های تحریم شده از داخل کشور بازدید کنید.</p>
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <div className="flex flex-grow justify-center gap-1" dir="ltr">
              <div>
                <img src="https://img.shields.io/github/downloads/DnsChanger/dnsChanger-desktop/total.svg" />
              </div>
              <div>
                <img src="https://img.shields.io/github/stars/dnsChanger/dnsChanger-desktop" />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-10">
            <div>
              <a href="https://github.com/DnsChanger/dnsChanger-desktop/releases/latest" target="_blank" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg">نصب dnsChanger-desktop</a>
            </div>
            <div >
              <span className="text-gray-500">  بعد از نصب ⭐ فراموش نشه :)</span>
            </div>
          </div>
        </div>

      </header>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">ویژگی‌های dnsChanger-desktop</h2>
          <div className="flex flex-wrap justify-center">
            {
              features.map((feature: Feature) => {
                return (
                  <div className="max-w-sm  overflow-hidden shadow-lg bg-white m-4 rounded-2xl">
                    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white m-4 flex items-center hover:relative hover:bottom-2">
                      <div className="p-4">
                        <feature.icon className="text-gray-600 text-2xl" />
                      </div>
                      <div className="flex-grow p-4">
                        <div className="font-bold text-xl mb-2">{feature.title}</div>
                        <p className="text-gray-700 text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">تصاویر dnsChanger-desktop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              HomePageImages.map((imgSrc: string, index: number) => {
                return (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-black">
                    <img src={imgSrc} alt={`image ${index + 1}`} className="w-full" />
                  </div>
                )
              })
            }
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
