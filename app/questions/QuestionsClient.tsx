import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import React from "react";

type Props = {};

function QuestionsClient() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <Link key={item} href={`/questions/${item}`}>
          {item}
        </Link>
      ))}
    </>
  );
}

export default QuestionsClient;
