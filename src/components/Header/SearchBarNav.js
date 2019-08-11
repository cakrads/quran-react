import React from "react";
import { Route } from "react-router-dom";

const SearchBarNav = () => {
  return (
    <Route
      render={({ history }) => (
        <div
          className="search-bar-nav"
          onClick={() => {
            history.push("/pencarian");
          }}
        >
          <i className="fa fa-search" />
          Cari Surah Ar Rahman
        </div>
      )}
    />
  );
};

export default SearchBarNav;
