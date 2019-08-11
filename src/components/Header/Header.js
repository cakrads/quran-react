import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";
import SearchBarNav from "./SearchBarNav";
import { Route } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    // alert("aa");
  });

  function handleCahnge(status) {
    setSideBarOpen(status);
  }

  return (
    <header>
      <SideMenu open={sideBarOpen} onClose={handleCahnge} />
      <nav>
        <i
          className="burger fas fa-bars"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        />
        <SearchBarNav />
        <Route
          render={({ history }) => (
            <span
              className="app-name"
              onClick={() => {
                history.push("/");
              }}
            >
              Quran Ku
            </span>
          )}
        />
      </nav>
    </header>
  );
};

export default Header;
