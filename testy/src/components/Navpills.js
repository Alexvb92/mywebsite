import React from "react";

const Navpills = props =>
  <div>

    <div className="mainlist">
        <div className="links1 col s4 m12">
            <div onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "active about listy1" : "listy1"}>
            About
            </div>
            <div onClick={() => props.handlePageChange("Portfolio")} className={props.currentPage === "Portfolio" ? "active portfolio listy1" : "listy1"}>
            Portfolio
            </div>
            <div className="contact listy1">
            Contact
            </div>
        </div>
    </div>
    <div className="dispnest center-align">
        <div className="display1 col s8 m12">
        stuff
        </div>
    </div>{/*
    <li
      onClick={() => props.handlePageChange("Home")}
      className={props.currentPage === "Home" ? "active" : ""}
    >
      <a>Home</a>
    </li>
    <li
      onClick={() => props.handlePageChange("About")}
      className={props.currentPage === "About" ? "active" : ""}
    >
      <a>About</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Blog")}
      className={props.currentPage === "Blog" ? "active" : ""}
    >
      <a>Blog</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Contact")}
      className={props.currentPage === "Contact" ? "active" : ""}
    >
      <a>Contact</a>
    </li>*/}
  </div>;

export default Navpills;
