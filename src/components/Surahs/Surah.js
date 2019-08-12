import React from "react";
import useGlobal from "./../../store/state";

const SurahComponent = props => {
  const surah = props.surah;
  const [globalState, globalActions] = useGlobal();
  let selected = globalState.selectedAya === surah.aya_id;

  let handleClick = () => {
    let selectedAya =
      globalState.selectedAya === surah.aya_id ? null : surah.aya_id;
    globalActions.setSelectedAya(selectedAya);
  };

  return (
    <span onClick={handleClick} className={selected ? "active" : ""}>
      {surah.aya_text}
      <span className="arabic-font-number">{surah.aya_number}</span>
    </span>
  );
};

export default SurahComponent;
