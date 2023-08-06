import React from "react";
import { FaTimes } from "react-icons/fa";
type Props = {
  title: string;
  onClick?: () => void
};

function TagItem({ title, onClick }: Props) {
  return (
    <div className=" p-1 bg-blue-300 flex items-center max-w-max text-white gap-x-1 rounded-lg text-xs">
      <p className="text-xs text-white">{title}</p>
      <span onClick={onClick}>
        <FaTimes />
      </span>
    </div>
  );
}

export default TagItem;
