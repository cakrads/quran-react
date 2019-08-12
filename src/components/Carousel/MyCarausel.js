import React from "react";
import Carousel from "./index";
import { Item } from "./carousel-components";
import { Link } from "react-router-dom";

const MyCarausel = props => {
  let myListCarousel = [
    {
      bg: "#bd9667",
      data: props.quran.allSurah()[35]
    },
    {
      bg: "#85bddb",
      data: props.quran.allSurah()[54]
    },
    {
      bg: "#8a8aef",
      data: props.quran.allSurah()[17]
    },
    {
      bg: "#f3ac94",
      data: props.quran.allSurah()[77]
    },
    {
      bg: "#60c7b3",
      data: props.quran.allSurah()[66]
    }
  ];

  return (
    <div id="carousel">
      <Carousel title="Carousel">
        {myListCarousel.map((surah, index) => (
          <Link key={index} to={`/${surah.data.slug}`}>
            <Item bgColor={surah.bg}>
              <div className="arabic-font arabic-font-2 arabic-font-kemanag">
                {surah.data.surat_text}
              </div>
              {surah.data.surat_name}
            </Item>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarausel;
