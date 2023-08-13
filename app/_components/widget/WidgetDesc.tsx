"use client";
import React, { AnchorHTMLAttributes, ForwardRefExoticComponent } from "react";
import { FaIcons } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

type Props = {
  Icon: IconType;
  desc: string;
  // href?: string;
};

function WidgetDesc({ Icon, desc }: Props) {
  return (
    <div className="flex items-center gap-x-2 px-4 py-3 bg-yellow-100 font-sans font-thin">
      <Icon />
      <p className="text-xs">
        {desc}
      </p>
    </div>
  );
}

export default WidgetDesc;
