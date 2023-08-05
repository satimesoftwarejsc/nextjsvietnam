import Link from "next/link";
import React from "react";

type Props = {};

function QuestionsClient({}: Props) {
  return <Link href='/questions/ask'>Add Question</Link>;
}

export default QuestionsClient;
