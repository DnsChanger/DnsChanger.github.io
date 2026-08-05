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
    <section className="bg-slate-900 py-20 px-4 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">مشارکت‌کنندگان</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            افرادی که به توسعه این ابزار متن‌باز کمک می‌کنند. شما هم می‌توانید با مشارکت در کدهای پروژه جزئی از این لیست باشید.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributors.map((user: User, index: number) => (
            <a
              key={index}
              target="_blank"
              href={user.html_url}
              className="cursor-pointer rounded-2xl select-none text-center border border-slate-800 bg-slate-800/60 p-6 transition-all hover:bg-slate-800 hover:border-slate-700 shadow-md flex items-center gap-4"
              rel="noreferrer"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width={60}
                height={60}
                className="rounded-xl flex-shrink-0"
              />
              <div className="flex-1 text-right">
                <div className="text-lg font-bold text-white mb-1">{user.login}</div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <SiGithub size={14} />
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
