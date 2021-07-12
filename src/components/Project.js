import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import ProjectBackground from "../images/Projectbackground.jpg";
import Project1 from "../images/campground.jpg";
import Project2 from "../images/portfolio.png";

function Project() {
  return (
    <div className="project">
      <div className="project_background">
        <img src={ProjectBackground} alt="" />
      </div>
      <div className="project_content">
        <div className="project_wrap">
          <Link to="">
            <img src={Project1} alt="" />
            <span className="project_title">Campground</span>
          </Link>
        </div>
        <div className="project_wrap">
          <Link to="/detail/id">
            <img src={Project2} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
