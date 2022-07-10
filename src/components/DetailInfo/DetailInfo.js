import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faList,
  faHeart,
  faStar,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

export default function DetailInfo(props) {
  const certificationInfo = props?.releaseDatesData?.results.filter(
    (f) => f.iso_3166_1 === props?.data?.production_countries[0].iso_3166_1
  )[0].release_dates[0].certification;

  return (
    <div className="right-block">
      <div className="title-item">
        <div className="title">
          <h2>
            {props?.data?.original_title}
            <span>({props?.data?.release_date.split("-")[0]})</span>
          </h2>
        </div>
        <div className="title-info">
          <span className="certification">{certificationInfo}</span>
          <span className="release">
            {props?.data?.release_date} (
            {props?.data?.production_countries[0].iso_3166_1})
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
            {`${Math.floor(props?.data?.runtime / 60)}h${
              props?.data?.runtime % 60
            }m`}
          </span>
        </div>
      </div>
      <ul className="score-item">
        <li className="score">
          <div className="percent">
            <span>{props?.data?.vote_average * 10}</span>
          </div>
          <span>
            User <br /> Score
          </span>
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faList} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faHeart} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faBookmark} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li className="play">
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
  );
}