import React from "react";
import SearchBarNav from "./SearchBarNav";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
  return (
    <header id="header-search">
      <nav>
        <SearchBarNav />
        <Link to={`/`}>
          <i className="fas fa-times" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
