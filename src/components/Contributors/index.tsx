import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

import { User } from "../../interfaces/user.interface";
import { OWNER, REPO_NAME } from "../../constant/general";

export default function Contributors() {
  const [contributors, setContributors] = useState<Array<User>>([]);

  useEffect(() => {
    getContributors().then(data => setContributors(data));
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-center">مشارکت کنندگان</h2>
          <p className="text-center">
            لیست کسایی که به توسعه این ابزار کمک میکنند. شما هم میتونید جزئی از
            این لیست باشید.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {contributors.map((user: User, index: number) => (
            <a
              target="_blank"
              href={user.html_url}
              className="max-w-sm cursor-pointer rounded-3xl overflow-hidden select-none text-center border border-gray-300 p-8 transition-all hover:bg-white hover:shadow-xl"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width={110}
                height={110}
                className="rounded-full mx-auto"
              />
              <div className="px-6 py-4 item">
                <div className=" text-xl mb-2 font-thin">{user.login}</div>
                <div className="flex flex-row items-center justify-center">
                  <SiGithub />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

async function getContributors() {
  const octokit = new Octokit({});

  const { data } = await octokit.request(
    `GET /repos/${OWNER}/${REPO_NAME}/contributors`,
    {
      owner: "OWNER",
      repo: "REPO_NAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return data || [];
}
