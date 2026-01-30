import React, {useContext} from "react";
import "./ManualProjects.scss";
import ManualProjectCard from "../../components/manualProjectCard/ManualProjectCard";
import {myProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ManualProjects() {
  const {isDark} = useContext(StyleContext);
  
  // Updated with your new name and description
  const projectsData = [
    {
      name: "RP235x Development Board",
      modelFile: "RP235x_60QFN.glb",
      desc: "Custom RP235x development board with LEDs, Neopixel LEDs, Push Buttons, Accelerometer and Environmental Sensor."
    }
  ];

  if (!myProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="myProjects">
        <div className="my-projects-main-div">
          <div className="my-projects-header">
            <h1
              className={
                isDark ? "dark-mode heading projects-heading" : "heading projects-heading"
              }
            >
              {myProjects.title}
            </h1>
            <p
              className={
                isDark ? "dark-mode subTitle projects-subtitle" : "subTitle projects-subtitle"
              }
            >
              {myProjects.subtitle}
            </p>
          </div>
          <div className="projects-grid">
            {projectsData.map((p, i) => (
              <ManualProjectCard key={i} project={p} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}