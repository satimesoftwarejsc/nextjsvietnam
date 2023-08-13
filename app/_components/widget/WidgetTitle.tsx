"use client";
import React from "react";

type Props = {
  title: string;
};

function WidgetTitle({ title }: Props) {
  return <h3 className="text-sm font-bold px-4 py-3 bg-yellow-200">{title}</h3>;
}

export default WidgetTitle;
