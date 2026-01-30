import React from "react";
import "./ManualProjectCard.scss";
import ModelViewer from "../modelViewer/ModelViewer";

export default function ManualProjectCard({project, isDark}) {
  return (
    <div className={isDark ? "dark-card manual-card" : "manual-card"}>
      {/* This mimics the certificate-image-div */}
      <div className="manual-3d-display-area">
        <ModelViewer
          modelPath={`${process.env.PUBLIC_URL}/models/${project.modelFile}`}
        />
      </div>

      <div className="manual-project-detail-div">
        <h5
          className={
            isDark ? "dark-mode manual-project-title" : "manual-project-title"
          }
        >
          {project.name}
        </h5>
        <p
          className={
            isDark
              ? "dark-mode manual-project-subtitle"
              : "manual-project-subtitle"
          }
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
}
