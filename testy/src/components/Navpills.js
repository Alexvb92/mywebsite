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
            <div  onClick={() => props.handlePageChange("Contact")} className={props.currentPage === "Contact" ? "active contact listy1" : "listy1"}>
            Contact
            </div>
        </div>
    </div>
    <div className="dispnest center-align">
        <div className="display1 col s8 m12">
        </div>
    </div>
  </div>;

export default Navpills;
