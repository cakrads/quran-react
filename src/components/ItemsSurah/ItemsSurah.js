import React from "react";
import ItemSurah from "./ItemSurah";

const ItemsSurah = props => {
  return (
    <div id="my-read">
      <h2>Surah</h2>
      {props.quran.allSurah().map((surah, index) => (
        <ItemSurah key={index} surah={surah} />
      ))}
    </div>
  );
};

export default ItemsSurah;
