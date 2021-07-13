import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import ProjectBackground from "../images/Projectbackground.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setProjects } from "./features/project/projectSlice";
import { selectDone } from "./features/project/projectSlice";
import { selectOnGoing } from "./features/project/projectSlice";

function Project() {
  const dispatch = useDispatch();
  let dones = [];
  let onGoings = [];

  useEffect(() => {
    db.collection("project").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log("HI");
        console.log(dones);
        switch (doc.data().type) {
          // if the type of data matched the category below, expand whatever it was and then add the new record
          case "done":
            dones = [...dones, { id: doc.id, ...doc.data() }];
            break;
          case "onGoing":
            onGoings = [...onGoings, { id: doc.id, ...doc.data() }];
            break;
          default:
        }
      });

      dispatch(
        setProjects({
          done: dones,
          onGoing: onGoings,
        })
      );
    });
  }, []);

  const doneProjects = useSelector(selectDone);
  const onGoingProjects = useSelector(selectOnGoing);

  return (
    <div className="project">
      <div className="project_background">
        <img src={ProjectBackground} alt="" />
      </div>
      <p>Done Project</p>
      <div className="project_content">
        {doneProjects &&
          doneProjects.map((project, key) => (
            <div className="project_wrap" key={key}>
              <Link to={"/detail/" + project.id}>
                <img src={project.images1} alt="project.title" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
