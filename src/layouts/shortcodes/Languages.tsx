import React from "react";
import type { JSX } from "react";
import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaLanguage,
  FaGitAlt,
  FaFileExcel,
} from "react-icons/fa";

type LanguagesProps = {
  languages: string[];
};

// Mapping each language to its corresponding icon
const languageIcons: Record<string, JSX.Element> = {
  JavaScript: <FaJs className="text-yellow-500" />,
  Python: <FaPython className="text-blue-500" />,
  Java: <FaJava className="text-red-500" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  SQL: <FaDatabase className="text-green-600" />,
  Excel: <FaFileExcel className="text-green-700" />,
  Git: <FaGitAlt className="text-orange-600" />,
};

export default function Languages({ languages }: LanguagesProps) {
  if (!languages || languages.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      {languages.map((language, index) => (
        <span
          className="btn-pill btn-primary w-30 h-8 flex items-center justify-center gap-2"
          key={`language-${index}`}
        >
          {languageIcons[language] || null}
          <span>{language}</span>
        </span>
      ))}
    </div>
  );
}
