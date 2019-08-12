import React from "react";
import { Link } from "react-router-dom";

const ItemSurah = props => {
  const surah = props.surah;
  return (
    <Link to={`/${surah.slug}`} className="item-surah">
      <div className="item">
        <h2>{surah.surat_name}</h2>
        {surah.surat_terjemahan}
      </div>
      <div className="item">
        <div
          className="arabic-font arabic-font-kemanag"
          dir="rtl"
          lang="ar"
          align="center"
        >
          {surah.surat_text}
        </div>
      </div>
    </Link>
  );
};

export default ItemSurah;
