import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import profilePic from "../images/profilephoto.JPG";

function Header() {
  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getDate() +
    "/" +
    (myCurrentDate.getMonth() + 1) +
    "/" +
    myCurrentDate.getFullYear();

  return (
    <div className="header">
      <div className="header_left">
        <img src={profilePic} alt="NYEW CHENG HAO" />
        <div>
          <h5>NYEW CHENG HAO</h5>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="header_middleContainer">
        <div className="header_middle">
          <a href="/">
            <HomeIcon />
            <span>HOME</span>
          </a>
        </div>
        <div className="header_middle">
          <a href="/Project">
            <AllInboxIcon />
            <span>PROJECT</span>
          </a>
        </div>
      </div>
      <div className="header_right">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Header;
