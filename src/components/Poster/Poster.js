import React from "react";

export default function Poster(props) {
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";
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

  return (
    <div className="left-block">
      <div className="image-block">
        <img src={`${imagePosterPath}${props.path}`} alt="Poster" />
      </div>
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
    </div>
  );
}
