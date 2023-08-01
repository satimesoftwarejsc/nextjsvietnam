import BackButton from "@/app/_components/BackButton";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const StoryDetail: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex flex-col gap-8">
      <BackButton routeTo="/story" />
      <p className="text-sm text-gray-600">1 thang 8 nam 2023</p>
      <h1 className="text-4xl font-bold">Nextjs 13</h1>
    </div>
  );
};

export default StoryDetail;
