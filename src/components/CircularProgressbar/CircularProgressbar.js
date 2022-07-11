import React from "react";

import {
  CircularProgressbar as ReactCircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressbar(props) {
  const getScoreColor = (score) => {
    var color = "";
    switch (true) {
      case score > 69:
        color = "1, 210, 119";
        break;
      case score > 39:
        color = "222, 225, 20";
        break;
      case score > 0:
        color = "248, 13, 13";
        break;
      default:
        color = "125, 122, 127";
        break;
    }
    return color;
  };

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
