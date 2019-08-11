import React from "react";
import useGlobal from "./../../store/state";

const SearchBarNav = () => {
  const [globalState, globalActions] = useGlobal();

  function handleChange(e) {
    let searchText = e.target.value;
    globalActions.setSearchText(searchText)
  }

  return (
    <div className="search-bar-nav">
      <i className="fa fa-search" />
      <input
        type="text"
        autoFocus
        placeholder="Ar Rahman"
        value={globalState.searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBarNav;
