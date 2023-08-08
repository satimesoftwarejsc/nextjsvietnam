"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

import { FaBars, FaSearch } from "react-icons/fa";
import SideBar from "../_components/sidebar";
type Props = {};

function TagClient({}: Props) {
  const [enteredTagName, setEnteredTagName] = useState("");
  const handleEnteredTagName = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredTagName(e.target.value);
  };
  return (
    <div className="h-full">
      <div className="max-w-7xl mx-auto grid grid-cols-12">
        <div className={`sm:col-span-2  h-full border-r relative`}>
          <SideBar />
        </div>
        <div className="sm:col-span-10 col-span-12 border-l-gray-300 mr-6">
          <div className="py-6 pl-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl lg:text-3xl">Tags</h3>
            </div>
            <div className="my-4">
              <p className="text-sm lg:text-base">
                A tag is a keyword or label that categorizes your question with
                other, similar questions. Using the right tags makes it easier
                for others to find and answer your question.
              </p>
              <Link
                href="/tags/synonyms"
                className="text-sm text-blue-300 hover:underline hover:text-blue-400 mt-2.5 block"
              >
                Show all tag synonyms
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-2 border border-gray-300 flex items-center gap-x-2 bg-white rounded-md">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Filer by tag name"
                  value={enteredTagName}
                  onChange={handleEnteredTagName}
                  className="placeholder:text-gray-400 text-sm border-none outline-none"
                />
              </div>
              <div className="join text-xs font-sans font-thin items-center">
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300  join-item normal-case">
                  Popular
                </button>
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 join-item normal-case">
                  Name
                </button>
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 join-item normal-case">
                  New
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ml-6">
            <div className="py-3 px-4 rounded-md border border-gray-300">
              <span className="py-1 px-2 bg-blue-100 text-blue-300 text-xs rounded-sm">
                Javascript
              </span>
              <p className="text-xs line-clamp-4 my-3">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam tenetur officiis quasi at eius et
                deserunt maxime illo consectetur odit odio illum quisquam,
                similique sapiente vel enim libero! Assumenda, a!
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>1.467.203 questions</span>
                <span>349 asked today, 2077 this week</span>
              </div>
            </div>
            <div className="py-3 px-4 rounded-md border border-gray-300">
              <span className="py-1 px-2 bg-blue-100 text-blue-300 text-xs rounded-sm">
                Javascript
              </span>
              <p className="text-xs line-clamp-4 my-3">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam tenetur officiis quasi at eius et
                deserunt maxime illo consectetur odit odio illum quisquam,
                similique sapiente vel enim libero! Assumenda, a!
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>1.467.203 questions</span>
                <span>349 asked today, 2077 this week</span>
              </div>
            </div>
            <div className="py-3 px-4 rounded-md border border-gray-300">
              <span className="py-1 px-2 bg-blue-100 text-blue-300 text-xs rounded-sm">
                Javascript
              </span>
              <p className="text-xs line-clamp-4 my-3">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam tenetur officiis quasi at eius et
                deserunt maxime illo consectetur odit odio illum quisquam,
                similique sapiente vel enim libero! Assumenda, a!
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>1.467.203 questions</span>
                <span>349 asked today, 2077 this week</span>
              </div>
            </div>
            <div className="py-3 px-4 rounded-md border border-gray-300">
              <span className="py-1 px-2 bg-blue-100 text-blue-300 text-xs rounded-sm">
                Javascript
              </span>
              <p className="text-xs line-clamp-4 my-3">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam tenetur officiis quasi at eius et
                deserunt maxime illo consectetur odit odio illum quisquam,
                similique sapiente vel enim libero! Assumenda, a!
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>1.467.203 questions</span>
                <span>349 asked today, 2077 this week</span>
              </div>
            </div>
          </div>
          <div className="join mt-4 float-right normal-nums">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn normal-case">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagClient;
