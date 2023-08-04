"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../_components/searchinput";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useQuill } from "react-quilljs";
import { POST, tags } from "@/libs/data";
import TagDescribeItem from "../_components/tagdescribeitem";
import TagItem from "../_components/tagitem";
type Props = {};

function QuestionClient({}: Props) {
  const [nextTitle, setNextTitle] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [notAllowedDetail, setNotAllowedDetail] = useState(true);
  const [notAllowedReview, setNotAllowedReview] = useState(true);
  const [notAllowedTag, setNotAllowedTag] = useState(true);
  const [isDropdown, setIsDropdown] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredProblem, setEnteredProblem] = useState("");
  const [enteredTags, setEnteredTags] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const { quill, quillRef } = useQuill();

  // Quill
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        const textContent = quill.getText();
        console.log(textContent);
        const onProblemHandler = () => {
          if (textContent.length >= 20) {
            setDisabled(false);
          } else {
            setDisabled(true);
          }
          setEnteredProblem(textContent.substring(0, textContent.length - 1));
        };
        onProblemHandler();
      });
    }
  }, [quill]);

  const onNextTitle = () => {
    setNotAllowedDetail(false);
    setNextTitle(false);
    window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
  };
  const onTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(e.target.value);
  };

  const onTagHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredTags(e.target.value);
    setNotAllowedTag(false);
  };

  const removeTagItem = (title: string) => {
    const newTagList = tagList.filter((item) => item !== title);
    setTagList(newTagList);
  };

  const confirmQuestions = async () => {
    const post = {
      id: Date.now().toString(),
      title: enteredTitle || "",
      details: enteredProblem,
      tags: tagList,
      date: new Date(),
    };
    let posts: POST[] = [];
    posts.push(post);
    const data = await axios.post("/api/questions", posts);
    console.log(typeof data);
  };
  const filterTag = tags.filter((tag) => tag.title.includes(enteredTags));

  const selectTagHandler = (title: string) => {
    setTagList((prev) => [...prev, title]);
    setEnteredTags("");
  };
  console.log("tagList", tagList);
  return (
    <>
      {/* Header */}
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
              <a className="btn btn-ghost rounded-none normal-case text-lg">
                Nextjs Viet Nam
              </a>
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
              <button
                className="avatar tooltip tooltip-bottom "
                data-tip="Hello"
              >
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
      {/* Content */}
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-2xl font-semibold font-sans lg:mt-14 lg:mb-14 mt-6 mb-12  mx-4">
          Ask a public question
        </h2>
        {/* Description */}
        <div className="grid grid-cols-12">
          <div className="mx-4 border p-6 border-primary bg-blue-100 rounded-md col-span-12 lg:col-span-8">
            <h3 className="font-thin text-lg">Writing a good question</h3>
            <div className="">
              <p className="text-sm font-sans">
                You&apos;re ready to{" "}
                <Link
                  className="text-blue-400 hover:text-blue-600"
                  href="/help/how-to-ask"
                >
                  ask
                </Link>{" "}
                a{" "}
                <Link
                  className="text-blue-400 hover:text-blue-600"
                  href="/help/on-topic"
                >
                  programming-related question
                </Link>{" "}
                and this form will help guide you through the process. Looking
                to ask a non-programming question? See the topics here to find a
                relevant site.
              </p>
              <p className="my-4 text-xs font-bold">Steps</p>
              <ul className="text-xs my-2 list-disc ml-8">
                <li className="mb-1">
                  Summarize your problem in a one-line title.
                </li>
                <li className="mb-1">Describe your problem in more detail.</li>
                <li className="mb-1">
                  Describe what you tried and what you expected to happen.
                </li>
                <li className="mb-1">
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li className="mb-1">
                  Review your question and post it to the site.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 my-4 mx-4 lg:gap-x-4 gap-y-4">
          <div className="lg:col-span-4 col-span-12 border lg:order-2 shadow-md shadow-gray-300 h-max">
            <h4 className="px-3 py-2 border-b font-sans">
              Writing a good title
            </h4>
            <div className="p-3 flex items-start justify-start gap-x-4">
              <svg
                aria-hidden="true"
                className="svg-spot spotPencil"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                  opacity=".2"
                ></path>
                <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
              </svg>
              <div className="text-xs font-sans">
                <p className="mb-3">Your title should summarize the problem.</p>
                <p className="mb-3">
                  You might find that you have a better idea of your title after
                  writing out the rest of the question.
                </p>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="lg:col-span-8 col-span-12 border px-3 pb-3 shadow shadow-slate-300 h-max">
            <h4 className="py-2 font-sans">Title</h4>
            <p className="text-xs">
              Be specific and imagine you&apos;re asking a question to another
              person.
            </p>
            <input
              type="text"
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              className="mt-3 input input-bordered h-0 py-4 input-primary border-gray-300 rounded-md w-full placeholder:text-xs "
              value={enteredTitle}
              onChange={onTitleHandler}
            />
            {nextTitle && (
              <button
                onClick={onNextTitle}
                className="my-4 min-h-[unset] h-[unset] py-2 btn text-sm btn-primary text-white normal-case font-sans"
              >
                Next
              </button>
            )}
          </div>
        </div>
        {/* Problem */}
        <div className="grid grid-cols-12 mx-4 mb-4 h-max">
          <div
            className={`lg:col-span-8 col-span-12 border px-3 pb-3 shadow shadow-slate-300 bg-white h-[450px] ${
              notAllowedDetail && "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            <h4 className="py-2 font-sans">
              What are the details of your problem?
            </h4>
            <p className="text-xs mb-3">
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>

            <div
              className={` sm:h-[300px] h-[250px] w-full ${
                notAllowedDetail && "pointer-events-none"
              } `}
            >
              <div ref={quillRef} />
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="grid grid-cols-12">
          <div
            className={`lg:col-span-8 col-span-12 bg-white text-gray-600 border px-3 pb-3 shadow shadow-slate-300 mx-3 ${
              notAllowedTag && "cursor-not-allowed bg-base-300 text-gray-400"
            }`}
          >
            <h4 className="py-2 font-sans">Tags</h4>
            <p className="text-xs">
              Add up to 5 tags to describe what your question is about. Start
              typing to see suggestions.
            </p>
            <div className="relative border py-2 px-3 flex items-center gap-x-2">
              <div className=" translate-y-[1px] left-2 flex items-center gap-x-2">
                {tagList.map((item, index) => (
                  <TagItem
                    key={index}
                    title={item}
                    onClick={() => removeTagItem(item)}
                  />
                ))}
              </div>

              {filterTag.length > 0 && enteredTags && (
                <div className="w-full top-full left-0 h-max border absolute bg-white z-50 shadow-sm shadow-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 ">
                  {filterTag.map((tag) => (
                    <TagDescribeItem
                      key={tag.id}
                      {...tag}
                      onClick={() => selectTagHandler(tag.title)}
                    />
                  ))}
                </div>
              )}
              <input
                type="text"
                placeholder={
                  tagList.length == 0 ? "e.g. (swift django wordpress)" : ""
                }
                className="h-full border-none outline-none placeholder:text-xs"
                value={enteredTags}
                onChange={onTagHandler}
              />
            </div>
            <div className="h-max">
              <button
                disabled={disabled}
                onClick={() => {}}
                className="mt-4 min-h-[unset] h-[unset] py-2 btn text-sm btn-primary text-white normal-case font-sans disabled:bg-blue-300 disabled:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Review Question */}
        <div className="grid grid-cols-12 mt-4">
          <div
            className={`lg:col-span-8 col-span-12 bg-white text-gray-600 border px-3 pb-3 shadow shadow-slate-300 mx-3 ${
              notAllowedReview && "bg-base-300 text-gray-400"
            }`}
          >
            <h4 className="py-2 font-sans">
              Review questions already on Stack Overflow to see if your question
              is a duplicate.
            </h4>
            <p className="text-xs">
              Clicking on these questions will open them in a new tab for you to
              review. Your progress here will be saved so you can come back and
              continue.
            </p>
            <div
              className="flex justify-between items-center p-3 border cursor-pointer mt-4"
              onClick={() => setIsDropdown(!isDropdown)}
            >
              <h4 className="text-gray-500 font-thin">
                Do any of these posts answer your question?
              </h4>
              {isDropdown ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isDropdown && (
              <div className="border">
                <p className="text-sm text-center p-6">
                  No duplicate questions found{" "}
                </p>
              </div>
            )}
            <div className="h-max">
              <button
                disabled={disabled}
                onClick={confirmQuestions}
                className="mt-4 min-h-[unset] h-[unset] py-2 btn text-sm btn-primary text-white normal-case font-sans disabled:bg-blue-300 disabled:text-white"
              >
                Confirm questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionClient;
