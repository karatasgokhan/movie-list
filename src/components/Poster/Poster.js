import React, { useState, useEffect } from "react";

export default function Poster(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";
  const imagePosterPathMobil = "https://image.tmdb.org/t/p/w116_and_h174_face";
  const propertyNames =
    props.providersData?.results && Object.keys(props.providersData?.results);
  const index =
    propertyNames &&
    propertyNames.findIndex((element) => {
      if (element === props.production) {
        return true;
      }
      return false;
    });

  var array =
    props.providersData?.results &&
    Object.keys(props.providersData?.results).map(function (key) {
      return props.providersData?.results[key];
    });
  const logoPath =
    index &&
    array[index] &&
    array[index]?.flatrate &&
    array[index]?.flatrate[0] &&
    array[index]?.flatrate[0]?.logo_path &&
    array[index]?.flatrate[0]?.logo_path;

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="left-block">
      <div className="image-block">
        <img
          src={`${
            windowSize.innerWidth > 992 ? imagePosterPath : imagePosterPathMobil
          }${props.path}`}
          alt="Poster"
        />
      </div>
      {!props.mobil && (
        <div className="text-block">
          {logoPath && (
            <div className="image-item">
              <img
                src={`${imagePosterPath}${logoPath}`}
                alt={array[index].flatrate[0].provider_name}
              />
            </div>
          )}
          <div className="text-item">
            <h4 className="streaming-text">Now Streaming</h4>
            <h3 className="streaming-text">Watch Now</h3>
          </div>
        </div>
      )}
    </div>
  );
}
