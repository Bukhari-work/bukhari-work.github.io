import type { ButtonProps } from "@/types";

import {
  FaFilePdf,
  FaFileLines,
  FaFileCsv,
  FaFileZipper,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaDownload,
} from "react-icons/fa6";

const getFileIcon = (fileName?: string) => {
  if (!fileName) return FaDownload;

  // Extract file extension
  const fileIcons: Record<string, React.ElementType> = {
    pdf: FaFilePdf,
    csv: FaFileCsv,
    zip: FaFileZipper,
    rar: FaFileZipper,
    txt: FaFileLines,
    rtf: FaFileLines,
    doc: FaFileWord,
    docx: FaFileWord,
    xls: FaFileExcel,
    xlsx: FaFileExcel,
    ppt: FaFilePowerpoint,
    pptx: FaFilePowerpoint,
  };

  const extension = fileName.split(".").pop()?.toLowerCase();
  return extension ? fileIcons[extension] || FaDownload : FaDownload;
};

const Button = ({
  label,
  link,
  target,
  style = "solid",
  rel = "nofollow",
  fileName,
  isDownload = false,
  showIcon = isDownload || !!fileName, // Auto-show icon if fileName exists or isDownload is true
}: ButtonProps) => {
  const isDownloadScenario = isDownload || !!fileName;

  const targetVal =
    target ||
    (link.startsWith("http") || isDownloadScenario ? "_blank" : "_self");

  // Safe rel attribute construction
  const relVal = ["noopener", "noreferrer", rel]
    .filter(Boolean)
    .join(" ")
    .trim();

  const IconComponent = getFileIcon(fileName);

  return (
    <a
      href={link}
      target={targetVal}
      rel={relVal}
      className={`btn mb-4 me-4 hover:text-white dark:hover:text-black no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
      download={isDownloadScenario ? fileName || isDownload : undefined}
      aria-label={
        isDownloadScenario ? `Download ${fileName || label}` : `Visit ${label}`
      }
    >
      {showIcon && (
        <IconComponent className="inline-block mr-2" aria-hidden="true" />
      )}
      {label}
    </a>
  );
};

export default Button;
