import { SiGithub, SiDiscord } from "react-icons/si";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { RiUbuntuFill } from "react-icons/ri";
import { Octokit } from "octokit";

import { HomePageImages } from "../../constant/imgsUrl";
import { features } from "../../constant/features";
import { Feature } from "../../interfaces/feature.interface";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/user.interface";
import { Avatar, Button } from "@material-tailwind/react";

const OWNER = "DnsChanger";
const REPO_NAME = "dnsChanger-desktop";

function App() {
  const [contributors, setContributors] = useState<Array<User>>([]);
  useEffect(() => {
    getContributors().then(data => setContributors(data));
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img src="/logo.png" className="w-10" />
            <div className="flex">
              <a href="#" className="text-white hover:text-gray-400 ml-8">
                خانه
              </a>
              <a
                href="https://github.com/DnsChanger"
                target="_blank"
                className="text-white hover:text-gray-400 ml-8"
              >
                مخزن گیت هاب
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="py-16">
        <div className="mx-auto px-4"></div>
        <div className="md:flex md:flex-row md:px-60">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-center text-gray-900 mb-8">
              DNS Changer
            </h1>
            <DetailsComponent />
          </div>
          <div>
            <div className="hidden md:block xl:block sm:block">
              <img src="https://user-images.githubusercontent.com/66132114/236648741-24f511f7-f603-490e-a7cb-a12b074e5985.gif"></img>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            ویژگی‌های dnsChanger-desktop
          </h2>
          <div className="flex flex-wrap justify-center">
            {features.map((feature: Feature) => {
              return (
                <div className="max-w-sm  overflow-hidden shadow-lg bg-white m-4 rounded-2xl">
                  <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white m-4 flex items-center hover:relative hover:bottom-2">
                    <div className="p-4">
                      <feature.icon className="text-gray-600 text-2xl" />
                    </div>
                    <div className="flex-grow p-4">
                      <div className="font-bold text-xl mb-2">
                        {feature.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            تصاویر dnsChanger-desktop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HomePageImages.map((imgSrc: string, index: number) => {
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-black">
                  <img
                    src={imgSrc}
                    alt={`image ${index + 1}`}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-center">مشارکت کنندگان</h2>
            <p className="text-center">
              لیست کسایی که به توسعه این ابزار کمک میکنند. شما هم میتونید جزئی
              از این لیست باشید{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {contributors.map((user: User, index: number) => {
              return <ContributorComponent user={user} />;
            })}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <p>
              <p>
                © {new Date().getFullYear()} تمامی محتویات و کدهای این پروژه تحت
                مجوز MIT منتشر شده‌اند. شما می‌توانید به‌صورت آزاد از این پروژه
                استفاده کنید و حقوق مالکیت فکری آن متعلق به توسعه‌دهندگان اصلی
                می‌باشد.
              </p>
            </p>
            <div className="flex">
              <a
                href="https://github.com/dnsChanger"
                target="_blank"
                className="ml-4"
              >
                <SiGithub />
              </a>
              <a
                href="https://discord.gg/p9TZzEV39e"
                target="_blank"
                className="ml-4"
              >
                <SiDiscord />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Developed By ChatGpt 🤖❤️

export default App;

function DetailsComponent() {
  return (
    <div>
      <p className="text-2xl text-center text-gray-700 mb-8">
        یک نرم افزار متن باز است که با استفاده از آن، کاربران می‌توانند با سادگی
        تنظیمات DNS خود را تغییر دهند و به این ترتیب، از دسترسی به اینترنت با
        سرعت و کارایی بالاتری برخوردار شوند.
      </p>
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
          <div className="flex flex-row gap-2">
            <a
              href="https://github.com/DnsChanger/dnsChanger-desktop/releases/latest"
              target="_blank"
            >
              <Button className="flex flex-row gap-2">
                <AiFillWindows />
                دانلود نسخه ویندوز
              </Button>
            </a>
            <a href="https://github.com/DnsChanger/dnsChanger-desktop/releases/latest">
              <Button className="flex flex-row gap-2">
                <RiUbuntuFill />
                دانلود نسخه لینوکس
              </Button>
            </a>

            <Button className="flex flex-row gap-2" color="gray" disabled>
              <AiFillApple />
              دانلود نسخه مک (به زودی)
            </Button>
          </div>
          <div></div>
          <div>
            <span className="text-gray-500"> بعد از نصب ⭐ فراموش نشه :)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Prop {
  user: User;
}
function ContributorComponent(prop: Prop) {
  const { user } = prop;
  return (
    <a href={user.html_url}>
      <div className="max-w-sm rounded-3xl overflow-hidden text-center shadow-lg hover:border-b-2 hover:border-b-teal-700">
        <Avatar
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          size="xxl"
        />
        <div className="px-6 py-4  item">
          <div className=" text-xl mb-2 font-thin">{user.login}</div>
          <div className="flex flex-row items-center justify-center">
            <div className="cursor-pointer">
              <a href={user.html_url} target="_blank">
                <SiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

async function getContributors() {
  const octokit = new Octokit({});

  const data = await octokit.request(
    `GET /repos/${OWNER}/${REPO_NAME}/contributors`,
    {
      owner: "OWNER",
      repo: "REPO_NAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  console.log(data);
  return data.data || [];
}
