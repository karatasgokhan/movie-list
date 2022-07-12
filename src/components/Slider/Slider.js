import React, { useState, useEffect } from "react";

import LoadingBar from "react-top-loading-bar";

import { useGetTheMoviesAndTvApiQuery } from "../../store/apis/TheMovieApi";

import SliderItem from "./SliderItem";
import Switch from "../Switch/Switch";

export default function Slider() {
  const [progress, setProgress] = useState(0);
  const [visibleBar, setVisibleBar] = useState(false);
  const [selected, setSelected] = useState("movie");
  const { data, isLoading } = useGetTheMoviesAndTvApiQuery(selected, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    setProgress(99);
    setVisibleBar(true);
    setTimeout(() => {
      setProgress(0);
      setVisibleBar(false);
    }, 800);
  }, [data]);

  return (
    <>
      {visibleBar && (
        <LoadingBar
          color="#01b4e4"
          background="transparent"
          height="4px"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      )}
      <div className="slider-block">
        <div className="slider-header">
          <h2>What's Popular</h2>
          <Switch setSelected={setSelected} selected={selected} />
        </div>
        <SliderItem data={data} selected={selected} isLoading={isLoading} />
      </div>
    </>
  );
}
