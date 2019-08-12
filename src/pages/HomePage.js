import React from "react";
import QuranAPI from "./../api/_chapter";
import MyCarausel from "./../components/Carousel/MyCarausel";
import ItemsSurah from "./../components/ItemsSurah/ItemsSurah";

const Home = () => {
  // console.log(QuranAPI.allSurah()[35]);
  // console.log(QuranAPI.allSurah()[54]);
  // console.log(QuranAPI.allSurah()[17]);
  // console.log(QuranAPI.allSurah()[77]);
  // console.log(QuranAPI.allSurah()[66]);

  return (
    <div id="home-page">
      <MyCarausel quran={QuranAPI} /> 
      <ItemsSurah quran={QuranAPI} />
    </div>
  );
};

export default Home;
