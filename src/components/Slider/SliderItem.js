import React from "react";
import { useNavigate } from "react-router-dom";

import * as ROUTES from "../../constants/routePath";

export default function SliderItem(props) {
  const navigate = useNavigate();
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="slider-item">
      <div className="slider">
        {props.data?.results.map((item, index) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
