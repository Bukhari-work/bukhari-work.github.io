import React from "react";
import { FaEarthAsia } from "react-icons/fa6";

type LocationProps = {
  location: string;
};

export default function Location({ location }: LocationProps) {
  if (!location) return null;

  return (
    <div className="flex items-center justify-center">
      <span className="flex items-center justify-center gap-2 h6 text-dark dark:text-white ">
        <FaEarthAsia className="h-10" />
        <span>{location}</span>
      </span>
    </div>
  );
}
