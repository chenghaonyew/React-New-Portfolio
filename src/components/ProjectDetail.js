import React from "react";
import "./ProjectDetail.css";
import ImgSlider from "./ImgSlider";

function ProjectDetail() {
  return (
    <div className="projectDetail">
      <ImgSlider />
      <div className="projectDetail_title">
        <h3>React Portfolio</h3>
      </div>
      <div className="projectDetail_info">
        <div className="projectDetail_description">
          <div className="project_status">Project Status: Done</div>
          <span>
            A modern personal portfolio webpage that built for showcasing my
            projects and resume.
          </span>
          <div className="projectDetail_link">
            <span>See </span>
            <a href="Https://Nyew-Portfolio.Netlify.Com/">Here</a>
          </div>
        </div>
        <div className="projectDetail_technology">
          <span>Technology Involved:</span>
          <p>- ReactJS - React-Slick - Firebase</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
