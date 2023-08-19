export type POST = {
  title: string;
  details: string;
  tags: any;
};
type TAG = {
  id: string;
  title: string;
  description?: string;
};
type user = {
  userId?: string;
  userName?: string;
  imageUser?: string;
};
type QUESTION = {
  id: string;
  vote: number;
  answer: number;
  view: number;
  title: string;
  desc: string;
  tags: TAG[];
  user: user;
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
export const questions: QUESTION[] = [
  {
    id: "1",
    vote: 1,
    answer: 2,
    view: 2,
    title: "How to create react app",
    desc: "I have a response returned from an API",
    tags: [
      {
        id: "1",
        title: "react js",
      },
      {
        id: "2",
        title: "nextjs",
      },
    ],
    user: {
      userId: "1",
      userName: "Le Trong Hiep",
    },
  },
  {
    id: "2",
    vote: 1,
    answer: 2,
    view: 2,
    title: "How to using vite create react app",
    desc: "I have a response returned from an API",
    tags: [
      {
        id: "1",
        title: "react js",
      },
      {
        id: "2",
        title: "vite",
      },
    ],
    user: {
      userId: "2",
      userName: "Cam Thi Lieu",
    },
  },
];
