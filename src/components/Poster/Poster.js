import React from "react";

export default function Poster(props) {
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";

  // const logoPath = props.providersData?.results?.filter(
  //   (f) => f === props.production
  // );

  // const arr = [];
  // Object.keys(props.providersData?.results).forEach((key) =>
  //   arr.push({ name: key, value: props.providersData?.results[key] })
  // );

  // console.log("providersData", arr);
  // console.log("production", props.production);
  // console.log("logoPath", logoPath);

  return (
    <div className="left-block">
      <div className="image-block">
        <img src={`${imagePosterPath}${props.path}`} alt="Poster" />
      </div>
      <div className="text-block">
        <div className="image-item">
          <picture>
            <source
              media="(min-width: 641px)"
              srcSet="/assets/img/streaming.webp"
              type="image/webp"
            />
            <img
              src="/assets/img/streaming.png"
              alt="Now Streaming on puhutv"
            />
          </picture>
        </div>
        <div className="text-item">
          <h4 className="streaming-text">Now Streaming</h4>
          <h3 className="streaming-text">Watch Now</h3>
        </div>
      </div>
    </div>
  );
}
