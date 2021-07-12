import React from "react";
import "./ProjectDetail.css";
import ImgSlider from "./ImgSlider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";
import DetailBackground from "../images/background-detail.png";
function ProjectDetail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("project")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="projectDetail">
      <div className="projectDetail_background">
        <img src={DetailBackground} alt="" />
      </div>
      <ImgSlider />
      <div className="projectDetail_title">
        <h3>{detailData.title}</h3>
      </div>
      <div className="projectDetail_info">
        <div className="projectDetail_description">
          <div className="project_status">
            Project Status: {detailData.status}
          </div>
          <span>{detailData.description}</span>
          <div className="projectDetail_link">
            <span>See </span>
            <a href={detailData.link}>Here</a>
          </div>
        </div>
        <div className="projectDetail_technology">
          <span>Technology Involved:</span>
          <p>{detailData.technology}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
