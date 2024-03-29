export default function NavBar() {
  return (
    <nav className="bg-[#181a21]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <img src="/logo.png" className="w-10" />
          <a
            target="_blank"
            href="https://github.com/DnsChanger"
            className="text-white px-3 rounded-md py-1.5 hover:bg-[#242732] transition-all"
            rel="noreferrer"
          >
            سورس گیت‌هاب
          </a>
        </div>
      </div>
    </nav>
  );
}
