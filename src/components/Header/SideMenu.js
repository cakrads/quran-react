import React from "react";
import { Link } from "react-router-dom";

const SideMenu = props => {
  const open = props.open;

  function handleStatusChange(status) {
    // setOpen(status);
    props.onClose(status);
  }

  return (
    <div id="side-menu">
      <div
        className={open ? "sideMenuOverlay" : ""}
        onClick={() => handleStatusChange(false)}
      >
        {/* <div onClick={() => handleStatusChange(false)} className="togle-opener">
          {open ? "X" : ""}
        </div> */}
      </div>

      <div
        className={open ? "quranku-side-menu sideBarOpen" : "quranku-side-menu"}
      >
        <div className="side-menu-top">
          Quran
          <span
            className="togle-opener"
            onClick={() => handleStatusChange(false)}
          >
            x
          </span>
        </div>
        <div className="side-menu-items">
          <Link to="/">Home</Link>
          <Link to="/chapter">Chapter</Link>
          <Link to="/favorite">Favorite</Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
