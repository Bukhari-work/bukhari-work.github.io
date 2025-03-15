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

interface ButtonProps {
  label: string;
  link: string;
  style?: "outline" | "solid";
  rel?: "nofollow" | "follow";
  fileName?: string;
  isDownload?: boolean;
  showIcon?: boolean;
}

const getFileIcon = (fileName?: string) => {
  if (!fileName) return FaDownload;

  // Extract file extension
  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "pdf":
      return FaFilePdf;
    case "csv":
      return FaFileCsv;
    case "zip":
    case "rar":
      return FaFileZipper;
    case "txt":
    case "rtf":
      return FaFileLines;
    case "doc":
    case "docx":
      return FaFileWord;
    case "xls":
    case "xlsx":
      return FaFileExcel;
    case "ppt":
    case "pptx":
      return FaFilePowerpoint;
    default:
      return FaDownload;
  }
};

const Button = ({
  label,
  link,
  style = "solid",
  rel = "nofollow",
  fileName,
  showIcon = !!fileName, // Auto-show icon if fileName exists
  isDownload = false,
}: ButtonProps) => {
  const IconComponent = getFileIcon(fileName);
  const isDownloadScenario = isDownload || !!fileName;

  const target =
    link.startsWith("http") || isDownloadScenario ? "_blank" : "_self";

  // Safe rel attribute construction
  const baseRel = "noopener noreferrer";
  const relValue =
    rel === "follow"
      ? baseRel
      : `${baseRel} ${rel}`.replace(/\s+/g, " ").trim();

  return (
    <a
      href={link}
      target={target}
      rel={relValue}
      className={`btn mb-4 me-4 hover:text-white dark:hover:text-black no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
      download={fileName || isDownload ? true : undefined}
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
