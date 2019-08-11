import React from "react";
import { Link } from "react-router-dom";

const ItemSurah = props => {
  const surah = props.surah;
  return (
    <Link to={`/${surah.slug}`} className="item-surah">
      <h2 key={surah.slug}>
        {surah.surat_name}
        <div
          className="arabic-font arabic-font-kemanag"
          dir="rtl"
          lang="ar"
          align="center"
        >
          {surah.surat_text}
        </div>
      </h2>
    </Link>
  );
};

export default ItemSurah;
