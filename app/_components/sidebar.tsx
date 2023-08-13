"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaGlobeAsia } from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";

type Props = {};

function SideBar({}: Props) {
  const [onOpen, setOnOpen] = useState(false);
  const handleModal = () => {
    setOnOpen(!onOpen);
  };
  return (
    <>
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
    </>
  );
}

export default SideBar;
