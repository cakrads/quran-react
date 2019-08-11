import React from "react";

const ItemsSurahComponent = props => {
  const surah = props.surah;
  return (
    <span key={surah.aya_id}>
      {surah.aya_text}
      <span className="arabic-font-number">{surah.aya_number}</span>
    </span>
    <h2 key={surah.slug}>
            <Link to={`/${surah.slug}`}>{surah.surat_name}</Link>
            <div
              className="arabic-font arabic-font-kemanag"
              dir="rtl"
              lang="ar"
              align="center"
            >
              {surah.surat_text}
            </div>
          </h2>
  );
};

export default ItemsSurahComponent;
