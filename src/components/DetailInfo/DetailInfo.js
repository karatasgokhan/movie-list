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
          <span className="genres">
            {props?.data?.genres.map((item, index) => {
              return <span key={index}> {item.name}</span>;
            })}
          </span>
          <span className="runtime">
            {`${Math.floor(props?.data?.runtime / 60)}h${
              props?.data?.runtime % 60
            }m`}
          </span>
        </div>
      </div>
      <div className="score-item">
        <div className="score">
          <span>{props?.data?.vote_average * 10}</span>
        </div>
        <span>User Score</span>
        <FontAwesomeIcon icon={faList} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faStar} />
        <div className="play">
          <FontAwesomeIcon icon={faPlay} />
          <span>Play Trailer</span>
        </div>
      </div>
      <div className="info-item">
        <span className="tag">{props?.data?.tagline}</span>
        <div className="overview">
          <h4>Overview</h4>
          <span>{props?.data?.overview}</span>
        </div>
        <div className="crew-item">
          {props?.creditsData?.crew?.slice(0, 4).map((item, index) => {
            return (
              <div key={index} className="crew-item">
                <p>{item.name}</p>
                <p>{item.job}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
