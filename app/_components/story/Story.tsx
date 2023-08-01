import React from "react";
import { IStory } from "@/app/(story)/story/page";
import Image from "next/image";

interface Props {
  story: IStory;
}

const Story: React.FC<Props> = ({ story }) => {
  return (
    <li className="card w-96 bg-base-100 shadow-xl">
      <a href={`/story/${story?.slug}`}>
        <figure className="h-[140px] relative">
          <Image src="/wallpaper.jpg" alt="Shoes" fill />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Nextjs</div>
            <div className="badge badge-outline">Reactjs</div>
          </div>
          <h2 className="card-title">
            {story.title || "Nextjs"}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <time className="text-slate-600">{story.created_date}</time>
            <div className="avatar-group -space-x-4">
              {story?.users?.length > 0 &&
                story?.users?.map((user) => (
                  <div className="avatar" key={user?.id}>
                    <div className="w-6">
                      <Image src={user?.image} alt="s" fill />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Story;
