"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
type TAG = {
  id: string;
  desc?: string;
  title: string;
};
type Props = {
  id: string;
  vote: number;
  answer: number;
  view: number;
  title: string;
  desc: string;
  userId?: string;
  userName?: string;
  userImage?: any;
  modified?: number;
  tags: TAG[];
};

function QuestionItem({
  id,
  vote,
  answer,
  view,
  title,
  desc,
  tags,
  userId,
  userName,
  userImage,
  modified,
}: Props) {
  const router = useRouter();
  function pushRouter() {
    router.push(`/questions/${id}/${title}`);
  }
  function seeProfileHandler() {
    router.push(`/users/${userId}/${userName}`);
  }
  return (
    <div className="flex gap-x-5 py-6 pl-14 pr-6 border-b hover:bg-gray-50">
      <div className="text-xs flex flex-col justify-around">
        <div className="flex gap-x-1">
          <span>{vote}</span>
          <span>{vote > 1 ? "votes" : "vote"}</span>
        </div>
        <div className="flex gap-x-1">
          <span>{answer}</span>
          <span>{answer > 1 ? "answers" : "answer"}</span>
        </div>
        <div className="flex gap-x-1">
          <span>{view}</span>
          <span>{view > 1 ? "views" : "view"}</span>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col justify-between gap-y-2 flex-1">
        <h4 className="text-blue-400 cursor-pointer" onClick={pushRouter}>
          {title}
        </h4>
        <p className="text-xs truncate text-ellipsis w-full">{desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            {tags?.length > 0 &&
              tags.map((item) => (
                <p
                  className="py-1 px-2 text-xs bg-blue-100 text-gray-600 rounded-md"
                  key={item.id}
                >
                  {item.title}
                </p>
              ))}
          </div>
          <div className="flex items-center justify-between gap-x-2 text-xs cursor-pointer">
            <Image
              src={userImage ? userImage : "/noavatar.png"}
              width={20}
              height={20}
              alt="Avatar"
            />
            <span onClick={seeProfileHandler} className="text-blue-400">
              {userName}
            </span>
            <span>{modified} modified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;
