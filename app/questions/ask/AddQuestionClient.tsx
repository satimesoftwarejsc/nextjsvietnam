"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { POST, tags } from "@/libs/data";
import TagDescribeItem from "../../_components/tagdescribeitem";
import TagItem from "../../_components/tagitem";
import Header from "@/app/_components/header";
type Props = {};

function AddQuestionClient({}: Props) {
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
      <Header />
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

export default AddQuestionClient;
