import React, { useState } from "react";

import { useGetTheMoviesAndTvApiQuery } from "../../store/apis/TheMovieApi";

import SliderItem from "./SliderItem";
import Switch from "../Switch/Switch";

export default function Slider() {
  const [selected, setSelected] = useState("movie");
  const { data } = useGetTheMoviesAndTvApiQuery(selected, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="slider-block">
      <div className="slider-header">
        <h2>Free To Watch</h2>
        <Switch setSelected={setSelected} selected={selected} />
      </div>
      <SliderItem data={data} selected={selected} />
    </div>
  );
}
