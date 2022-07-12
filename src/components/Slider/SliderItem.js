import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHeart,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import CircularProgressbar from "../CircularProgressbar/CircularProgressbar";

import * as ROUTES from "../../constants/routePath";

export default function SliderItem(props) {
  const [fade, setFade] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  let dropdown = useRef();
  const navigate = useNavigate();
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";

  const sliderDropdownContent = [
    {
      value: "Add To list",
      icon: <FontAwesomeIcon icon={faList} />,
    },
    {
      value: "Favorite",
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
      value: "Watchlist",
      icon: <FontAwesomeIcon icon={faBookmark} />,
    },
    {
      value: "Your Rating",
      icon: <FontAwesomeIcon icon={faStar} />,
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropdownIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  useEffect(() => {
    setFade(true);
    if (!props.isLoading) {
      setTimeout(() => {
        setFade(false);
      }, 1000);
    }
  }, [props.selected, props.isLoading]);

  const onclickDropdownItem = (index) => {
    setDropdownIndex(index);
  };

  return (
    <div className={`slider-item ${fade ? "elementToFadeInAndOut" : ""}`}>
      <div className="slider">
        {props.data?.results?.map((item, index) => {
          return (
            <div key={index} className="cart">
              {dropdownIndex === index && <div className="blur-item"></div>}
              <div className="image-block">
                <div
                  className="dots-item"
                  onClick={() => onclickDropdownItem(index)}
                >
                  <div className="dot default">
                    <img src="/assets/img/dots.svg" alt="Transparant Dots" />
                  </div>
                  <div className="dot hover">
                    <img
                      src="/assets/img/dotsHover.svg"
                      alt="Transparant Blue Dots"
                    />
                  </div>
                  {dropdownIndex === index && (
                    <div ref={dropdown} className="slider-dropdown-menu">
                      <ul>
                        {sliderDropdownContent.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="dropdown">
                                {item.icon}
                                {item.value}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
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
