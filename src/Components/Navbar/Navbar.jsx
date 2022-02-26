import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="p-3">
      <div class="header-brand">
        <a href="#" class="btn-link">
          Always Notes
        </a>
      </div>
      <div class="search">
        <i class="far fa-search"></i>
        <input type="text" placeholder="Search..." class="input-textbox p-1" />
      </div>
      <div class="nav center-div">
        <a href="#">
          <button class="btn">Logout</button>
        </a>
        <div class="avatar avatar-txt center-div avatar-xsm m-1">
          <span>SD</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
