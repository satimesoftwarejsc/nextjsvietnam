"use client";
import React from "react";
import { questions } from "@/libs/data";
import Header from "@/app/_components/header";
import WidgetDesc from "@/app/_components/widget/WidgetDesc";
import { FaMailBulk, FaPen, FaSign } from "react-icons/fa";
import WidgetTitle from "@/app/_components/widget/WidgetTitle";
import SideBar from "@/app/_components/sidebar";
import Link from "next/link";
type Props = {
  questionId: string;
};

function QuestionIdClient({ questionId }: Props) {
  console.log("====================================");
  console.log(questions);
  console.log("====================================");
  return (
    <>
      {questions.map(
        (question: any, index: number) =>
          question.id === questionId && (
            <div key={index}>
              <Header />
              <div className="max-w-7xl mx-auto grid grid-cols-12">
                <div className={`sm:col-span-2  h-full border-r relative`}>
                  <SideBar />
                </div>
                <div className="sm:col-span-10 col-span-12">
                  <div className="flex items-center justify-between py-6 border-b border-gray-300">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl">
                        {question.title}
                      </h3>
                      <div className="flex items-center gap-x-3 text-xs mt-4">
                        <span>Asked 2 days ago</span>
                        <span>Modified 2 days ago</span>
                        <span>Viewed 318 times</span>
                      </div>
                    </div>
                    <Link
                      href="/questions/ask"
                      className="px-4  bg-blue-500 items-center flex justify-center min-h-[unset] h-[unset] py-2.5 text-white normal-case text-xs font-sans rounded-lg hover:bg-blue-400"
                    >
                      Ask Question
                    </Link>
                  </div>
                  <div className="grid grid-cols-12">
                    {/* Content */}
                    <div className="sm:col-span-9 col-span-12 border-l-gray-300 mr-6">
                      <p>{question.desc}</p>
                      {/* Answer */}
                      <div>
                        <span>3 Answers</span>
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
              </div>
            </div>
          )
      )}
    </>
  );
}

export default QuestionIdClient;
