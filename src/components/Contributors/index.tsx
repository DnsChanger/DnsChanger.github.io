import axios from "axios";
import { SiGithub } from "react-icons/si";
import { useEffect, useState } from "react";

import { User } from "../../interfaces/user.interface";
import { OWNER, REPO_NAME } from "../../constant/general";

export default function Contributors() {
  const [contributors, setContributors] = useState<Array<User>>([]);

  useEffect(() => {
    getContributors().then(data => setContributors(data));
  }, []);

  return (
    <section className="py-24 px-5 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">مشارکت‌کنندگان</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            افرادی که به توسعه این ابزار متن‌باز کمک می‌کنند. شما هم می‌توانید با مشارکت در کدهای پروژه جزئی از این لیست باشید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {contributors.map((user: User, index: number) => (
            <a
              key={index}
              target="_blank"
              href={user.html_url}
              className="group flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 select-none"
              rel="noreferrer"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  width={52}
                  height={52}
                  className="rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-500/30 transition-all duration-300"
                />
              </div>
              <div className="flex-1 text-right min-w-0">
                <div className="text-sm font-bold text-white truncate mb-1">{user.login}</div>
                <div className="flex items-center justify-end gap-1.5 text-xs font-medium text-gray-600 group-hover:text-emerald-500 transition-colors duration-300">
                  <SiGithub size={12} />
                  <span>مشاهده پروفایل</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

async function getContributors(): Promise<User[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${OWNER}/${REPO_NAME}/contributors`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
