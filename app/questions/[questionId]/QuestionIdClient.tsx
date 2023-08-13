import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

type Props = {};

function QuestionIdClient({ params }: { params: { questionId: string } }) {
  return <div>QuestionIdClient {params.questionId}</div>;
}

export default QuestionIdClient;
