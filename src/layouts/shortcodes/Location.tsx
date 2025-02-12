import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

type LocationProps = {
  location: string;
};

export default function Location({ location }: LocationProps) {
  if (!location) return null;

  return (
    <div className="flex items-center justify-center">
      <span className="flex items-center justify-center gap-2 h6 text-dark dark:text-white ">
        <FaMapMarkerAlt className="h-10" />
        <span>{location}</span>
      </span>
    </div>
  );
}
