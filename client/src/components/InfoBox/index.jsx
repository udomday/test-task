import React from "react";

export const InfoBox = ({ icon, styleBlockIcon, title, procent, count }) => {
  return (
    <div className="infobox-root flex flex-column flex-justify-between">
      <div className={styleBlockIcon}>
        <span className="material-icons-round">{icon}</span>
      </div>
      <div className="flex flex-justify-end">
        <div style={{ textAlign: "right" }} className="flex flex-column">
          <span style={{ color: "#7B92C1", fontWeight: "lighter" }}>
            {title}
          </span>
          <h2 style={{ color: "#344767", fontWeight: "normal" }}>{count}</h2>
        </div>
      </div>
      <span style={{ color: "#7B92C1", fontWeight: "lighter" }}>
        <hr />
        <span style={{ color: "#4CAF50" }}>{procent}% </span>
        than lask week
      </span>
    </div>
  );
};
