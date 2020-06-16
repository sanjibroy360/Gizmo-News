import React from "react";

function Header() {
  return (
    <header>
      <div className="container header_flex">
        <p className="logo">Gizmo</p>
        <ul>
          <li className="header_title">
            <div className="searchbox">
              <input type="text" className="search_box_input" />
              <button className="search_icon">
              <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              <button className="lang_btn">en</button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
