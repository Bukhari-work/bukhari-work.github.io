import React from "react";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaRegFilePowerpoint,
  FaDownload,
} from "react-icons/fa";

const DownloadButton = ({
  label,
  link,
  style,
  rel,
  fileType,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  fileType?: string; // e.g., "pdf", "doc", "xls", etc.
}) => {
  // Determine the icon based on the fileType prop.
  let IconComponent;
  switch (fileType?.toLowerCase()) {
    case "pdf":
      IconComponent = FaFilePdf;
      break;
    case "doc":
    case "doc":
    case "docx":
      IconComponent = FaFileWord;
      break;
    case "excel":
    case "xls":
    case "xlsx":
      IconComponent = FaFileExcel;
      break;
    case "powerpoint":
    case "power point":
    case "ppt":
    case "pptx":
      IconComponent = FaRegFilePowerpoint;
      break;
    default:
      IconComponent = FaDownload;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn mb-4 me-4 hover:text-white dark:hover:text-black no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
    >
      {IconComponent && <IconComponent className="inline-block mr-2" />}
      {label}
    </a>
  );
};

export default DownloadButton;
