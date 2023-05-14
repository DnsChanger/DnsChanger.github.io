import { SiGithub } from "react-icons/si";
import { Avatar } from "@material-tailwind/react";
import { User } from "../../interfaces/user.interface";

export default function Contributor({ user }: { user: User }) {
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
