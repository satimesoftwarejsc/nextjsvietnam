import React from "react";
import { NextPage } from "next";
import Story from "@/app/_components/story/Story";

export interface IStory {
  id: string;
  title: string;
  tags: string[];
  created_date: string;
  updated_date: string;
  users: Array<{ id: string; image: string }>;
  slug: string;
}

const StoryList: NextPage = () => {
  const stories: IStory[] = [
    {
      id: "1",
      title: "Nextjs 13.4",
      tags: [],
      created_date: "1 tháng 8, 2023",
      updated_date: "",
      users: [
        {
          id: "1",
          image: "/git.png",
        },
        {
          id: "2",
          image: "/zalo.png",
        },
      ],
      slug: "tv13-4",
    },
    {
      id: "2",
      title: "",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
    },
    {
      id: "3",
      title: "",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
    },
    {
      id: "4",
      title: "",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
    },
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-8 grid-flow-row">
      {stories?.map((story: IStory) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
