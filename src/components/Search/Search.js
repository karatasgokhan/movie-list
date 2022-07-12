import React from "react";

import SearchBar from "./SearchBar";

export default function Search() {
  const entries = performance.getEntriesByType("navigation");

  const ChangeBackgorundOnPageRefresh = () => {
    if (entries[0].type === "reload") {
      return Math.floor(Math.random() * 10) + 1;
    }
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(var(--darkBlue), 0.8) 0%, rgba(var(--darkBlue), 0) 100%), url("/assets/img/homeSubHeaderBackground/${
          !ChangeBackgorundOnPageRefresh() ? 1 : ChangeBackgorundOnPageRefresh()
        }.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "340px",
        maxHeight: "360px",
        display: "flex",
      }}
      className="search-root"
    >
      <div className="search-wrapper">
        <h2>Welcome.</h2>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <SearchBar />
      </div>
    </section>
  );
}
