import React from "react";
import "./Home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeBackgroundPic from "../images/Projectbackground.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_background">
        <img src={HomeBackgroundPic} alt=""></img>
      </div>
      <div className="home_title">
        <p>Nyew Cheng Hao ∙ 23 years old</p>
      </div>
      <div className="home_contentMeta">
        <div className="home_controls">
          <a className="home_icon" href="https://github.com/chenghaonyew">
            <GitHubIcon />
            <span>github</span>
          </a>
          <a
            className="home_icon"
            href="https://www.linkedin.com/in/cheng-hao-nyew-ab6992191/"
          >
            <LinkedInIcon />
            <span>linkedin</span>
          </a>
          <a className="home_icon" href="mailto:nyewch0404@gmail.com">
            <EmailIcon />
            <span>gmail</span>
          </a>
          <a className="home_icon" href="https://github.com/chenghaonyew">
            <DescriptionIcon />
            <span>resume</span>
          </a>
        </div>
        <div className="home_description">
          <p>
            My name is Evan. Previously studied in Taylors' University(Selangor)
            & University of Minnesota - Twin Cities(United State) majoring in
            computer science. I passionate about computer science, especially
            software and web development.
          </p>
          <p>
            I'm currently working on a real life project about store recording &
            goods delivery mobile application which is going to improve the
            efficiency of workers.
          </p>
          <p>Contact me for full time/contract web developer opportunities!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
