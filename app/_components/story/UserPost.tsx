import React from "react";
import Image from "next/image";
import { IStory } from "@/app/(story)/story/page";

interface Props {
  story: IStory;
}

const UserPost: React.FC<Props> = ({ story }) => {
  return (
    <ul className="flex flex-wrap pb-4 border-b-2 border-gray-300">
      {story?.users?.map((user) => (
        <li className=" rounded-lg p-1" key={user.id}>
          <a href="fb.com" className="flex gap-2 items-center">
            <span className="rounded-full">
              <Image
                src={user.image}
                alt="image"
                width={32}
                height={32}
                className="rounded-full"
              />
            </span>
            <div className="flex flex-col">
              <span className=" text-sm dark:text-white">{user.name}</span>
              <span className="text-xs text-gray-400 dark:text-gray-200">
                @onembes
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserPost;
