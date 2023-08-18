export type POST = {
  title: string;
  details: string;
  tags: any;
};
type TAG = {
  id: string;
  title: string;
  description: string;
};
let posts: POST[] = [];

export const postQuestions = (post: POST) => posts.push(post);

export const tags: TAG[] = [
  {
    id: "1",
    title: "react",
    description: "React is a JavaScript library for building",
  },
  {
    id: "2",
    title: "angularjs",
    description: "Angular js is a JavaScript framework for building",
  },
  {
    id: "3",
    title: "next.js",
    description:
      "Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
  },
  {
    id: "4",
    title: "react",
    description: "React is a JavaScript library for building",
  },
  {
    id: "5",
    title: "angularjs",
    description: "Angular js is a JavaScript framework for building",
  },
  {
    id: "6",
    title: "next.js",
    description:
      "Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
  },
];
