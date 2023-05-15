import { SiDiscord, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#181a21] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <p className="font-light text-sm">
            ©{new Date().getFullYear()} تمامی محتویات و کدهای این پروژه تحت مجوز
            MIT منتشر شده‌اند. شما می‌توانید به‌صورت آزاد از این پروژه استفاده
            کنید و حقوق مالکیت فکری آن متعلق به توسعه‌دهندگان اصلی می‌باشد.
          </p>

          <div className="flex mr-32">
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
  );
}
