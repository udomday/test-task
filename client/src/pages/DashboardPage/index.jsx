import React from "react";
import { ChartBox, InfoBox } from "../../components";

export const DashboardPage = () => {
  return (
    <div style={{ paddingTop: "20px", width: "100%" }}>
      <div
        style={{ paddingTop: "20px", width: "100%" }}
        className="grid grid-columns-4"
      >
        <InfoBox
          icon={"book"}
          styleBlockIcon={"flex icon-block icon-block-gray"}
          title={"Books"}
          count={281}
          procent={55}
        />
        <InfoBox
          icon={"leaderboard"}
          styleBlockIcon={"flex icon-block icon-block-blue"}
          title={"Statistics"}
          count={512}
          procent={2}
        />
        <InfoBox
          icon={"store"}
          styleBlockIcon={"flex icon-block icon-block-green"}
          title={"Sales"}
          count={3452}
          procent={1}
        />
        <InfoBox
          icon={"person_add"}
          styleBlockIcon={"flex icon-block icon-block-pink"}
          title={"Followers"}
          count={91}
          procent={20}
        />
      </div>
      <div className="grid grid-columns-2 mt-60">
        <ChartBox />
        <ChartBox />
      </div>
    </div>
  );
};
