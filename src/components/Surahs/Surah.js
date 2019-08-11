import React from "react";

const SurahComponent = props => {
  const surah = props.surah;
  return (
    <span key={surah.aya_id}>
      {surah.aya_text}
      <span className="arabic-font-number">{surah.aya_number}</span>
    </span>
  );
};

export default SurahComponent;
