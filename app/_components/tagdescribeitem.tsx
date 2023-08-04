import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
type Props = {
  id: string;
  title: string;
  description: string;
  onClick?: () => void;
};

function TagDescribeItem({ id, title, description, onClick }: Props) {
  return (
    <div className="text-xs font-sans sm:p-3 p-4  hover:bg-gray-100 w-full rounded-sm sm:rounded-none" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div>
          <span className="py-1 px-2 bg-blue-200 rounded-md text-blue-500 font-medium">{title}</span>
          <span className="ml-2">{id}</span>
        </div>
        <AiFillQuestionCircle />
      </div>
      <p className="mt-3">{description}</p>
    </div>
  );
}

export default TagDescribeItem;
