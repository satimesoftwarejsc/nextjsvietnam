import BackButton from "@/app/_components/BackButton";
import StoryContent from "@/app/_components/story/StoryContent";
import UserPost from "@/app/_components/story/UserPost";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const story = {
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
      name: "Onembes",
    },
  ],
  slug: "tv13-4",
  content:
    "<h2>When to Use Static Generation vs. Server-side Rendering</h2><article><p>We recommend using <strong>Static Generation</strong> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.</p>",
};

const StoryDetail: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex flex-col gap-8">
      <BackButton routeTo="/story" />
      <p className="text-sm text-gray-400 font-semibold">
        {story.created_date}
      </p>
      <h1 className="text-5xl font-semibold">{story.title}</h1>
      <p className="font-medium text-gray-600">
        Bộ định tuyến ứng dụng (App Router) đại diện cho một nền tảng mới cho
        tương lai của Next.js, nhưng chúng tôi nhận ra rằng có những cơ hội để
        cải thiện trải nghiệm. Chúng tôi muốn thông báo về những ưu tiên hiện
        tại của chúng tôi.
      </p>
      <UserPost story={story} />
      <StoryContent data={story.content} />
    </div>
  );
};

export default StoryDetail;
