import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "moment";

import CircularProgressbar from "../CircularProgressbar/CircularProgressbar";

import * as ROUTES from "../../constants/routePath";

export default function SliderItem(props) {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 1000);
  }, [props.selected]);

  return (
    <div className={`slider-item ${fade ? "elementToFadeInAndOut" : ""}`}>
      <div className="slider">
        {props.data?.results?.map((item, index) => {
          return (
            <div key={index} className="cart">
              <div className="image-block">
                <div className="image-item">
                  <div
                    className="image"
                    onClick={() => {
                      navigate(
                        `${
                          props.selected === "movie"
                            ? ROUTES.MOVIEDETAIL_WITHOUT_PARAM
                            : ROUTES.TVDETAIL_WITHOUT_PARAM
                        }/${item.id}`
                      );
                    }}
                  >
                    <img
                      src={`${imagePosterPath}${item.backdrop_path}`}
                      alt={`Slider Poster ${index}`}
                    />
                  </div>
                </div>
              </div>
              <div className="slider-content">
                <CircularProgressbar data={item} />
                <div className="text-item">
                  <h2>{props.selected === "movie" ? item.title : item.name}</h2>
                  <p>
                    {props.selected === "movie"
                      ? Moment(item.release_date).format("MMM Do YY")
                      : Moment(item.first_air_date).format("MMM Do YY")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
