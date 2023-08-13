import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import React from "react";

type Props = {};

function QuestionsClient({  }) {
  return <Link href={`/questions/${questionId}`}>QuestionsClient</Link>;
}

export default QuestionsClient;
