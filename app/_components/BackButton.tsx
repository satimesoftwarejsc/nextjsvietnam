import React from "react";

interface Props {
  routeTo: string;
}

const BackButton: React.FC<Props> = ({ routeTo }) => {
  return (
    <a
      href={routeTo}
      className="flex items-center hover:text-gray-200 duration-200 text-sm"
    >
      <svg
        data-v-40670dad=""
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="icon text-3xl"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2Z"
        />
      </svg>
      Trở về trang trước
    </a>
  );
};

export default BackButton;
