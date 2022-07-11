import React, { useEffect } from "react";

import Search from "../components/Search/Search";
import Slider from "../components/Slider/Slider";

export default function Home() {
  useEffect(() => {
    document.title = "The Movie Database(TMDB)";
  }, []);

  return (
    <>
      <Search />
      <section className="content-root">
        <div className="content-wrapper">
          <div className="content-container">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
