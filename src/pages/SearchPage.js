import React from "react";
import QuranAPI from "./../api/_chapter";
import HeaderSearch from "./../components/HeaderSearch/HeaderSearch";
import { Link } from "react-router-dom";
import useGlobal from "./../store/state";

const Search = () => {
  const [globalState] = useGlobal();

  let resultSearch = [];
  QuranAPI.allSurah().forEach(surah => {
    if (surah.surat_name.indexOf(globalState.searchText) === -1) {
      return;
    }
    resultSearch.push(
      <h2 key={surah.slug}>
        <Link to={`/${surah.slug}`}>{surah.surat_name}</Link>
      </h2>
    );
  });

  return (
    <div>
      <HeaderSearch />
      <div id="search-page">{resultSearch}</div>
    </div>
  );
};

export default Search;
