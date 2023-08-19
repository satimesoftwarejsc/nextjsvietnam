
import React from "react";
import QuestionIdClient from "./QuestionIdClient";

type Props = {};

function QuestionId({ params }: { params: { questionId: string } }) {
  console.log(params);
  const questionId = params.questionId[0];
  return <QuestionIdClient questionId={questionId} />;
}

export default QuestionId;
