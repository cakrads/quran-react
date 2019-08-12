import React from "react";

const Bismillah = props => {
  const surah = props.surah;
  const quran = props.quranAPI;
  let useBismillah = surah.id !== 1 && surah.id !== 9;
  let bismillah = quran.kemenag.getChapter(1)[0].aya_text;
  console.log(bismillah);

  if (useBismillah) {
    return (
      <div
        id="bismillah"
        className="arabic-font arabic-font-kemanag"
        dir="rtl"
        lang="ar"
        align="center"
      >
        {bismillah}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Bismillah;
