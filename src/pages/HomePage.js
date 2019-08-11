import React from "react";
import QuranAPI from "./../api/_chapter";
import Carousel from "./../components/Carousel/index";
import { Item } from "./../components/Carousel/carousel-components";
import { ItemSurah } from "./../components/ItemsSurah/ItemSurah";

const Home = () => {
  return (
    <div id="home-page">
      <Carousel title="Carousel">
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
      <div>
        {QuranAPI.allSurah().map((surah, index) => (
          <ItemSurah key={index} surah={surah} />
        ))}
      </div>
    </div>
  );
};

export default Home;
