import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./searchinput";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="shadow-sm shadow-slate-300 bg-white">
      <div className="navbar p-0 min-h-[unset] max-w-7xl mx-auto justify-between">
        <div className="">
          <div className="dropdown">
            <button className="btn rounded-none btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="flex-none sm:block hidden">
            <Link
              href="/questions"
              className="btn btn-ghost rounded-none normal-case text-lg"
            >
              Nextjs Viet Nam
            </Link>
          </div>
          <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="px-3 py-2 cursor-pointer m-1 normal-case bg-white border-none text-neutral-700 hover:bg-slate-100 rounded-full font-light text-xs"
            >
              Products
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <SearchInput searchStyle="hidden sm:block" dropdown />
        <div className="join justify-end">
          <div className="join-item dropdown sm:hidden">
            <button className="btn btn-square rounded-none btn-ghost">
              <svg
                aria-hidden="true"
                className="s-input-icon s-input-icon__search svg-icon iconSearch"
                fill="#444"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
              </svg>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content dropdown-bottom z-[1] menu p-2 shadow bg-base-100 rounded-box w-[490px] -left-full -translate-x-[144px]"
            >
              <SearchInput />
            </div>
          </div>
          <Link
            href="#"
            className=" bg-white join-item  btn rounded-none indicator"
          >
            <button className="avatar tooltip tooltip-bottom " data-tip="Hello">
              <div className="rounded-md ">
                <span className="indicator-item indicator-middle flex items-center -right-1 text-xs">
                  1
                </span>
                <Image
                  src="https://i.pinimg.com/474x/98/f7/8c/98f78c51d3db64f2fb1b39c20126fca0.jpg"
                  alt="avatar"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </div>
            </button>
          </Link>
          <div className="join-item dropdown">
            <button className="btn btn-square rounded-none btn-ghost">
              <svg
                aria-hidden="true"
                className="svg-icon iconInbox"
                width="20"
                height="18"
                viewBox="0 0 20 18"
              >
                <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
              </svg>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h2>Heading</h2>
            </div>
          </div>
          <div className="join-item dropdown">
            <button className="btn btn-square rounded-none btn-ghost">
              <svg
                aria-hidden="true"
                className="svg-icon iconAchievements"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
              </svg>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h2>Heading</h2>
            </div>
          </div>
          <div className="join-item dropdown">
            <button className="btn btn-square rounded-none btn-ghost">
              <svg
                aria-hidden="true"
                className="svg-icon iconHelp"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
              </svg>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h2>Heading</h2>
            </div>
          </div>
          <div className="join-item dropdown">
            <button className="btn btn-square rounded-none btn-ghost">
              <svg
                aria-hidden="true"
                className="svg-icon iconStackExchange"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
              </svg>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h2>Heading</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
