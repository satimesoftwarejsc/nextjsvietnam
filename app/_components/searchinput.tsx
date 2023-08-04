"use client";
import React from "react";
import Link from "next/link";

type SearchInputProps = {
  searchStyle?: string;
  dropdown?: boolean;
};

function SearchInput({ searchStyle, dropdown }: SearchInputProps) {
  return (
    <div
      className={`relative border flex-1 border-gray-300 rounded-lg dropdown ${searchStyle} w-full`}
    >
      <svg
        aria-hidden="true"
        className="s-input-icon s-input-icon__search svg-icon iconSearch absolute left-3 top-[10px]"
        fill="#444"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="input-bordered input-info placeholder:text-gray-400 placeholder:font-light placeholder:text-sm px-9 py-1.5 w-full rounded-lg"
      />
      {dropdown ? (
        <div className="dropdown-content dropdown-bottom z-[1]  shadow-sm shadow-gray-400 rounded-md lg:w-full -left-[274px] md:left-0 mt-2 bg-white w-[620px]">
          <div className="flex px-3 py-2 justify-between border-b border-b-slate-400">
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-medium font-sans text-sm ">[tag]</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search by tag
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm ">
                  user:1234
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search by author
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  &quot;words here&quot;
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  exact phrase
                </span>
              </div>
              <div className="">
                <span className="font-medium font-sans text-sm">
                  collective: &quot;Name&quot;
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search with a tag
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">answers:0</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  unanswered questions
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">score:3</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  posts with a 3+ score
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  is:question
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  type of post
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  isaccepted:yes
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search with status
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <Link
              className="text-xs btn min-h-[unset] h-[unset] py-1.5 normal-case text-primary font-thin "
              href="/question"
            >
              Ask a question
            </Link>
            <Link
              className="text-xs normal-case text-primary font-thin "
              href="/help/searching"
            >
              Search help
            </Link>
          </div>
        </div>
      ) : (
        <div className="shadow-sm  shadow-gray-400 rounded-md w-full mt-2">
          <div className="flex px-3 py-2 justify-between border-b border-b-slate-400">
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-medium font-sans text-sm ">[tag]</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search by tag
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm ">
                  user:1234
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search by author
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  &quot;words here&quot;
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  exact phrase
                </span>
              </div>
              <div className="">
                <span className="font-medium font-sans text-sm">
                  collective: &quot;Name&quot;
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search with a tag
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">answers:0</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  unanswered questions
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">score:3</span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  posts with a 3+ score
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  is:question
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  type of post
                </span>
              </div>
              <div className="mb-2">
                <span className="font-medium font-sans text-sm">
                  isaccepted:yes
                </span>
                <span className="text-zinc-500 font-sans ml-2 text-sm">
                  search with status
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <Link
              className="text-xs btn min-h-[unset] h-[unset] py-1.5 normal-case text-primary font-thin "
              href="/question"
            >
              Ask a question
            </Link>
            <Link
              className="text-xs normal-case text-primary font-thin "
              href="/help/searching"
            >
              Search help
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
