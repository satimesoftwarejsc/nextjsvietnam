"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaGlobeAsia, FaMailBulk, FaPen, FaSign } from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";
import WidgetTitle from "../_components/widget/WidgetTitle";
import WidgetDesc from "../_components/widget/WidgetDesc";
import QuestionItem from "../_components/questionitem";
type Props = {};

function QuestionsClient({}: Props) {
  const [onOpen, setOnOpen] = useState(false);
  const handleModal = () => {
    setOnOpen(!onOpen);
  };
  return (
    <div className="h-full">
      <div className="max-w-7xl mx-auto grid grid-cols-12">
        <div className={`sm:col-span-2  h-full border-r relative`}>
          <span className="block sm:hidden" onClick={handleModal}>
            <FaBars />
          </span>
          <ul
            className={`menu h-full p-0  ${
              onOpen ? "block absolute top-4 left-0" : "hidden"
            } sm:block text-xs md:text-sm w-full`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>PUBLIC</span>
              <ul className="before:w-0">
                <li>
                  <Link href="/questions">
                    <FaGlobeAsia />
                    Questions
                  </Link>
                </li>
                <li>
                  <Link href="/tags">Tags</Link>
                </li>
                <li>
                  <Link href="/users">Users</Link>
                </li>
                <li>
                  <Link href="/companies">Companies</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>COLLECTIVES</span>
              <ul className="menu before:w-0 m-0 p-0">
                <li className="m-0">
                  <Link href="/collectives">
                    <GiJusticeStar />
                    Collectives
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7 sm:col-span-9 col-span-12 border-l-gray-300 mr-6">
          <div className="py-6 pl-6  border-b">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl">All Questions</h3>
              <Link
                href="/questions/ask"
                className="px-4  bg-blue-500 items-center flex justify-center min-h-[unset] h-[unset] py-2.5 text-white normal-case text-xs font-sans rounded-lg hover:bg-blue-400"
              >
                Ask Question
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <p className="text-sm lg:text-base">23,843,696 questions</p>
              <div className="join text-xs font-sans font-thin mt-4 md:mt-0">
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300  join-item normal-case">
                  Newest
                </button>
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 join-item normal-case">
                  Active
                </button>
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 join-item normal-case hidden sm:block">
                  Bountied
                </button>
                <button className="px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 join-item normal-case hidden sm:block">
                  Unanswered
                </button>
                <details className="join-item dropdown px-4 py-2 bg-gray-100 focus:bg-gray-300 border border-gray-300 cursor-pointer">
                  <summary className="text-xs">More</summary>
                  <ul className="p-2 shadow menu dropdown-content left-0 top-full z-[1] bg-base-100  w-52">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
          <div>
            {/* {questions.length > 0 &&
              questions.map((question: any) => ( */}
            <QuestionItem
              id="1"
              vote={1}
              answer={2}
              view={2}
              title="How to create react app"
              desc="I have a response returned from an API"
              tags={[
                {
                  id: "1",
                  title: "react js",
                },
                {
                  id: "2",
                  title: "nextjs",
                },
              ]}
              userId="1"
              userName="Le Trong Hiep"
            />
            {/* ))} */}
          </div>
          <div className="join mt-2">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
        {/* Widget */}
        <div className="hidden lg:block sm:col-span-3 py-6">
          <div className="border marker:border-amber-300">
            <WidgetTitle title="The Overflow Blog" />
            <WidgetDesc
              Icon={FaPen}
              desc="How engineering teams at a large org can move at startup speed
  sponsored post"
            />
            <WidgetDesc
              Icon={FaPen}
              desc="The fine line between product and engineering (Ep. 596)"
            />
          </div>
          <div className="border marker:border-amber-300">
            <WidgetTitle title="Featured on Meta" />
            <WidgetDesc
              Icon={FaMailBulk}
              desc="
              We’re collecting feedback on how we can improve the Stack Exchange API"
            />
            <WidgetDesc
              Icon={FaMailBulk}
              desc="
              Moderation strike: Results of negotiations"
            />
          </div>
          <div className="border marker:border-amber-300">
            <WidgetTitle title="Hot Meta Posts" />
            <WidgetDesc
              Icon={FaSign}
              desc="
              Deprecation clause in small tag description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsClient;
