import React from "react";
import SelectedBS from "./SelectedBS";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

const Footer = props => {
  let chapter = props.chapter;
  let surah = props.surah;

  return (
    <SwipeableBottomSheet
      overflowHeight={64}
      bodyStyle={{
        backgroundColor: "inherit !important",
        paddingTop: ".5rem",
      }}
      topShadow={false}
      // overlayStyle={{ backgroundColor: "#bd9667" }}
    >
      <div id="bottom-sheet" style={{ height: "340px" }}>
        <div className="toggle-announce"></div>
        <h2 className="title-bottom primary">{surah.surat_name}</h2>
        <SelectedBS chapter={chapter} />
        Here goes the content of your bottom sheet
      </div>
    </SwipeableBottomSheet>
  );
};

export default Footer;
