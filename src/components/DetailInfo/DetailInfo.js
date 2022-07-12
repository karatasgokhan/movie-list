import React, { useState } from "react";

import Moment from "moment";

import CircularProgressbar from "../CircularProgressbar/CircularProgressbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faList,
  faHeart,
  faStar,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function DetailInfo(props) {
  const [openModal, setOpenModal] = useState(false);
  const certificationInfo = props?.releaseDatesData?.results?.filter(
    (f) => f.iso_3166_1 === props?.data?.production_countries[0]?.iso_3166_1
  )[0]?.release_dates[0]?.certification;

  const ratingsInfo = props?.ratingsData?.results?.filter(
    (f) => f.iso_3166_1 === props?.data?.production_countries[0]?.iso_3166_1
  )[0]?.rating;

  const icons = [
    {
      icon: <FontAwesomeIcon icon={faList} />,
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
    },
  ];

  return (
    <>
      <div className="right-block">
        <div className="title-item">
          <div className="title">
            <h2>
              {props.selectedSwitch.name === "movie"
                ? props.data?.original_title
                : props.data?.original_name}
              <span>
                (
                {props.selectedSwitch.name === "movie"
                  ? props.data?.release_date?.split("-")[0]
                  : props.data?.first_air_date?.split("-")[0]}
                )
              </span>
            </h2>
          </div>
          <div className="title-info">
            <span className="certification">
              {props.selectedSwitch.name === "movie"
                ? certificationInfo
                  ? certificationInfo
                  : "NR"
                : ratingsInfo
                ? ratingsInfo
                : "NR"}
            </span>
            <span className="release">
              {props.selectedSwitch.name === "movie"
                ? Moment(props.data?.release_date).format("DD/MM/YYYY")
                : Moment(props.data?.first_air_date).format("DD/MM/YYYY")}{" "}
              ({props?.data?.production_countries[0]?.iso_3166_1})
            </span>
            <span className="genres dot">
              {props?.data?.genres.map((item, index) => {
                return (
                  <span className="comma" key={index}>
                    {item.name}
                  </span>
                );
              })}
            </span>
            <span className="runtime dot">
              {props.selectedSwitch.name === "movie"
                ? `${Math.floor(props?.data?.runtime / 60)}h${
                    props?.data?.runtime % 60
                  }m`
                : `${
                    props?.data?.episode_run_time &&
                    props?.data?.episode_run_time[0]
                  }m`}
            </span>
          </div>
        </div>
        <ul className="score-item">
          <li className="score">
            <CircularProgressbar data={props.data} />
            <span>
              User <br /> Score
            </span>
          </li>
          {icons.map((item, index) => {
            return (
              <li key={index} className="icon">
                {item.icon}
              </li>
            );
          })}
          <li className="play" onClick={() => setOpenModal(true)}>
            <FontAwesomeIcon icon={faPlay} />
            <span>Play Trailer</span>
          </li>
        </ul>
        <div className="info-item">
          <span className="tag">{props?.data?.tagline}</span>
          <div className="overview">
            <h3>Overview</h3>
            <span>{props?.data?.overview}</span>
          </div>
          <div className="crew-item">
            {props?.creditsData?.crew?.slice(0, 4).map((item, index) => {
              return (
                <div key={index} className="crew">
                  <p className="name">{item.name}</p>
                  <p>{item.job}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {openModal && (
        <div className="lb-root">
          <div className="lb-block">
            <div className="head-item">
              <h3>Play Trailer</h3>
              <div className="close-item">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${props.videosData?.results[0]?.key}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />{" "}
          </div>
        </div>
      )}
    </>
  );
}
