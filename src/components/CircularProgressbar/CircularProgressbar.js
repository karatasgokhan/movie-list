import React from "react";

import getScoreColor from "../../helper/scoreColor";

import {
  CircularProgressbar as ReactCircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressbar(props) {
  return (
    <div className="percent">
      <ReactCircularProgressbar
        value={props?.data?.vote_average * 10}
        text={`${props?.data?.vote_average * 10}%`}
        styles={buildStyles({
          textSize: "1.5rem",
          pathColor: `rgba(${getScoreColor(props?.data?.vote_average * 10)}, ${
            props?.data?.vote_average * 10
          })`,
          textColor: "#fff",
          trailColor: `rgba(${getScoreColor(
            props?.data?.vote_average * 10
          )},0.4)`,
          backgroundColor: "#3e98c7",
        })}
      />
      <div className="shadow"></div>
    </div>
  );
}
