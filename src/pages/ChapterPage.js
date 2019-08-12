import React, { useEffect } from "react";
import Surahs from "./../components/Surahs/Surahs";
import Bismillah from "./../components/Surahs/Bismillah";
import BottomSheet from "./../components/BottomSheet/BottomSheet";
import QuranAPI from "./../api/_chapter";

const ChapterPage = props => {
  const surah = QuranAPI.slugToId(props.match.params.chapter);
  useEffect(() => {
    // Update the document title using the browser API
    if (surah) document.title = `Al-Quran Surah ${surah.surat_name}`;
    else document.title = `Ayat tidak ditemukan`;
  });

  if (!surah) return <div>Sorry, but the player was not found</div>;

  const chapter = QuranAPI.kemenag.getChapter(surah.id);

  if (!chapter) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <div id="chapter-page">
      <Bismillah surah={surah} quranAPI={QuranAPI} />
      <Surahs chapter={chapter} />
      <BottomSheet chapter={chapter} surah={surah} />
    </div>
  );
};

export default ChapterPage;
