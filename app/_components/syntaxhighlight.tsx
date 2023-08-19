"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {};

function SyntaxHighlight({}: Props) {
  const codeString = (num: number) => num + 1;
  return <div>SyntaxHighlight</div>;
}

export default SyntaxHighlight;
