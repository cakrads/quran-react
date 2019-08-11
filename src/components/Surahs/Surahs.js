import React from "react";
import Surah from "./Surah";

const SurahsComponent = (props) => {
  const chapter = props.chapter;

  return (
    <div
      className="arabic-font arabic-font-kemanag"
      dir="rtl"
      lang="ar"
      align="center"
    >
      {chapter.map((surah, index) => (
        <Surah key={index} surah={surah}/>
      ))}
    </div>
  );
};

export default SurahsComponent;
