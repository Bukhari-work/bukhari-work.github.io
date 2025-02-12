import React from "react";
import type { FC, ReactElement } from "react";
import { FaJava, FaFileExcel, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  // SiPostgresql,
  SiGit,
  SiLooker,
  SiTableau,
} from "react-icons/si";

interface LanguagesProps {
  languages: string[];
}

// Mapping each language to its corresponding icon with official brand colors
const languageIcons: Record<string, ReactElement> = {
  JavaScript: <SiJavascript style={{ color: "#F7DF1E" }} />, // JavaScript: #F7DF1E
  Python: <SiPython style={{ color: "#3776AB" }} />, // Python: #3776AB
  Java: <FaJava style={{ color: "#007396" }} />, // Java: #007396
  HTML: <SiHtml5 style={{ color: "#E34F26" }} />, // HTML5: #E34F26
  CSS: <SiCss3 style={{ color: "#1572B6" }} />, // CSS3: #1572B6
  SQL: <FaDatabase style={{ color: "#336791" }} />, // PostgreSQL used as a SQL icon: #336791
  Excel: <FaFileExcel style={{ color: "#217346" }} />, // Excel: #217346
  Git: <SiGit style={{ color: "#F05032" }} />, // Git: #F05032
  Looker: <SiLooker style={{ color: "#0033AD" }} />, // Looker: #0033AD
  Tableau: <SiTableau style={{ color: "#E97627" }} />, // Tableau: #E97627
};

const Languages: FC<LanguagesProps> = ({ languages }) => {
  if (languages.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      {languages.map((language, index) => (
        <span
          key={`${language}-${index}`}
          className="btn-pill btn-primary w-30 h-8 flex items-center justify-center gap-2"
        >
          {languageIcons[language] || null}
          <span>{language}</span>
        </span>
      ))}
    </div>
  );
};

export default Languages;
