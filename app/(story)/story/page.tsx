import React from "react";
import { NextPage } from "next";
import Story from "@/app/_components/story/Story";

export interface IStory {
  id: string;
  title: string;
  tags: string[];
  created_date: string;
  updated_date: string;
  users: Array<{ id: string; image: string; name: string }>;
  slug: string;
  content: string;
}

const StoryList: NextPage = () => {
  const stories: IStory[] = [
    {
      id: "1",
      title: "Nextjs 13.4",
      tags: ["Nextjs"],
      created_date: "1 tháng 8, 2023",
      updated_date: "",
      users: [
        {
          id: "1",
          image: "/git.png",
          name: "Lê Thời",
        },
        {
          id: "2",
          image: "/avatar1.jpg",
          name: "Lê Thời",
        },
      ],
      slug: "tv13-4",
      content:
        "<p>Next.js 13.4 là một phiên bản cơ bản, đánh dấu sự ổn định cho App Router.</p><ul><li><strong>Improving Performance</strong></li><li><strong>Improving Stability</strong></li><li><strong>Improving Developer Education</strong></li></ul>",
    },
    {
      id: "2",
      title: "Next 12",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
      content: "",
    },
    {
      id: "3",
      title: "Next 11",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
      content: "",
    },
    {
      id: "4",
      title: "Next 10",
      tags: [],
      created_date: "",
      updated_date: "",
      users: [],
      slug: "tv13-4",
      content: "",
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
