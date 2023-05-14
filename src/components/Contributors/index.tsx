import { Octokit } from "octokit";
import { useEffect, useState } from "react";

import { User } from "../../interfaces/user.interface";
import Contributor from "../Contributor";

const OWNER = "DnsChanger";
const REPO_NAME = "dnsChanger-desktop";

export default function Contributors() {
  const [contributors, setContributors] = useState<Array<User>>([]);

  useEffect(() => {
    getContributors().then(data => setContributors(data));
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-center">مشارکت کنندگان</h2>
          <p className="text-center">
            لیست کسایی که به توسعه این ابزار کمک میکنند. شما هم میتونید جزئی از
            این لیست باشید{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {contributors.map((user: User, index: number) => (
            <Contributor user={user} />
          ))}
        </div>
      </div>
    </section>
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
